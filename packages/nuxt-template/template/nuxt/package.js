module.exports = {
  apply (pkg, generator) {
    // edge
    const { cliOptions = {} } = generator.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''
    if (edge) {
      delete pkg.dependencies.nuxt
      pkg.dependencies['nuxt-edge'] = 'latest'
    }

    const { scripts } = pkg

    // Linter
    const lintScripts = {
      eslint: 'npm run lint:js',
      stylelint: 'npm run lint:style'
    }

    const lintScript = Object.values(lintScripts).join(' && ')
    if (lintScript) {
      pkg.scripts.lint = lintScript
    }

    // TS
    for (const key of Object.keys(scripts)) {
      scripts[key] = scripts[key].replace(/^nuxt( |$)/, 'nuxt-ts$1')
    }
    return pkg
  }
}
