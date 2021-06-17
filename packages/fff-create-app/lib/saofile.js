const { dirname, join, relative } = require('path')
const spawn = require('cross-spawn')
const validate = require('validate-npm-package-name')
const pkg = require('./package')

const cnaTemplateDir = join(dirname(require.resolve('@formfunfunction/nuxt-template/package.json')))
const isWindows = process.platform === 'win32'
const templateDir = join(cnaTemplateDir, 'template')
const frameworksDir = join(templateDir, 'frameworks')

module.exports = {
  prompts: require('./prompts'),
  templateData () {
    const typescript = true
    const pwa = this.answers.features.includes('pwa')
    const eslint = true
    const prettier = true
    const lintStaged = false
    const stylelint = true
    const commitlint = false
    const axios = this.answers.features.includes('axios')
    const content = this.answers.features.includes('content')
    const pm = 'yarn'
    const pmRun = 'yarn'
    const { cliOptions = {} } = this.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''

    return {
      typescript,
      pwa,
      eslint,
      prettier,
      lintStaged,
      stylelint,
      commitlint,
      axios,
      edge,
      pm,
      pmRun,
      content,
      isWindows
    }
  },
  actions () {
    const validation = validate(this.answers.name)
    validation.warnings && validation.warnings.forEach((warn) => {
      console.warn('Warning:', warn)
    })
    validation.errors && validation.errors.forEach((err) => {
      console.error('Error:', err)
    })
    validation.errors && validation.errors.length && process.exit(1)

    const actions = [{
      type: 'add',
      files: '**',
      templateDir: join(templateDir, 'nuxt'),
      filters: {
        'static/icon.png': 'features.includes("pwa")',
        'content/hello.md': 'features.includes("content")',
        'pages/content.vue': 'features.includes("content")'
      }
    }]

    if (this.answers.test !== 'none') {
      actions.push({
        type: 'add',
        files: '**',
        templateDir: join(frameworksDir, this.answers.test)
      })
    }

    actions.push({
      type: 'add',
      files: '*',
      templateDir
    })

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
        '_.prettierrc': '.prettierrc',
        '_.eslintrc.js': '.eslintrc.js',
        '_jsconfig.json': 'jsconfig.json',
        '_stylelint.config.js': 'stylelint.config.js',
        '_commitlint.config.js': 'commitlint.config.js',
        'semantic.yml': '.github/semantic.yml',
        'dependabot.yml': '.github/dependabot.yml'
      }
    })

    const generator = this
    actions.push({
      type: 'modify',
      files: 'package.json',
      handler (data) {
        return { ...data, ...pkg.load(generator) }
      }
    })

    // For compiling package.json
    actions.push({
      type: 'add',
      files: 'package.json',
      templateDir: this.outDir
    })

    actions.push({
      type: 'remove',
      files: 'package.js'
    })

    return actions
  },
  async completed () {
    this.gitInit()

    await this.npmInstall({ npmClient: 'yarn' })

    spawn.sync('yarn', ['run', 'lint:js', '--', '--fix'].splice(2, 1), {
      cwd: this.outDir,
      stdio: 'inherit'
    })

    spawn.sync('yarn', ['run', 'lint:style', '--', '--fix'].splice(2, 1), {
      cwd: this.outDir,
      stdio: 'inherit'
    })

    const chalk = this.chalk
    const isNewFolder = this.outDir !== process.cwd()
    const relativeOutFolder = relative(process.cwd(), this.outDir)
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : ''
    const pmRun = 'yarn'

    console.log(chalk`\n🎉  {bold Successfully created project} {cyan ${this.answers.name}}\n`)

    console.log(chalk`  {bold To get started:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} dev}\n`)

    console.log(chalk`  {bold To build & start for production:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} build}`)
    console.log(chalk`\t{cyan ${pmRun} start}\n`)

    if (this.answers.test !== 'none') {
      console.log(chalk`  {bold To test:}\n`)
      console.log(chalk`${cdMsg}\t{cyan ${pmRun} test}\n`)
    }

    console.log(chalk`\n  {bold For TypeScript users.} \n\n  See : https://typescript.nuxtjs.org/cookbook/components/`)
  }
}
