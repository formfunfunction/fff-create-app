module.exports = {
  apply (pkg, generator) {
    // edge
    const { cliOptions = {} } = generator.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''
    if (edge) {
      delete pkg.dependencies.nuxt
      pkg.dependencies['nuxt-edge'] = 'latest'
    }

    const { features } = generator.answers

    // Linter
    const lintScripts = {
      eslint: '<%= pmRun %> lint:js',
      stylelint: '<%= pmRun %> lint:style'
    }

    const lintScript = Object.values(lintScripts).join(' && ')
    if (lintScript) {
      pkg.scripts.lint = lintScript
    }

    // Modules
    if (!features.includes('axios')) {
      delete pkg.dependencies['@nuxtjs/axios']
    }
    if (!features.includes('pwa')) {
      delete pkg.dependencies['@nuxtjs/pwa']
    }

    return pkg
  }
}
