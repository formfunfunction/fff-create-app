const { merge, sortByKey } = require('./util')

module.exports = {
  requireFile (filename) {
    try {
      return require(filename)
    } catch (error) {
      return {}
    }
  },
  requireJSON (filename) {
    return JSON.parse(JSON.stringify(this.requireFile(filename)))
  },
  loadPackage (name, generator) {
    if (!name || name === 'none') {
      return {}
    }
    const prefix = name === 'nuxt' ? 'nuxt' : `frameworks/${name}`
    const pkg = this.requireJSON(`@formfunfunction/nuxt-template/template/${prefix}/package.json`)
    const pkgHandler = this.requireFile(`@formfunfunction/nuxt-template/template/${prefix}/package.js`)
    return pkgHandler.apply ? pkgHandler.apply(pkg, generator) : pkg
  },
  load (generator) {
    const nuxtPkg = this.loadPackage('nuxt', generator)
    const testPkg = this.loadPackage(generator.answers.test, generator)
    const pkg = merge(nuxtPkg, testPkg)
    pkg.dependencies = sortByKey(pkg.dependencies)
    pkg.devDependencies = sortByKey(pkg.devDependencies)
    return pkg
  }
}
