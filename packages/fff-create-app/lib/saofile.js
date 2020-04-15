const { dirname, join, relative } = require('path')
const spawn = require('cross-spawn')
const validate = require('validate-npm-package-name')

const cnaTemplateDir = join(dirname(require.resolve('@formfunfunction/nuxt-template/package.json')))
const templateDir = join(cnaTemplateDir, 'template')
const frameworksDir = join(templateDir, 'frameworks')

module.exports = {
  prompts: require('./prompts'),
  templateData () {
    const axios = this.answers.features.includes('axios')
    const prismic = this.answers.features.includes('prismic')
    const esm = true
    const pm = this.answers.pm === 'yarn' ? 'yarn' : 'npm'
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'

    const { cliOptions = {} } = this.sao.opts
    const edge = cliOptions.edge ? '-edge' : ''

    return {
      axios,
      prismic,
      esm,
      edge,
      pm,
      pmRun
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
      templateDir: join(templateDir, 'nuxt')
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
      filters: {
        '_jsconfig.json': 'devTools.includes("jsconfig.json")'
      },
      templateDir
    })

    actions.push({
      type: 'move',
      patterns: {
        gitignore: '.gitignore',
        '_package.json': 'package.json',
        '_.prettierrc': '.prettierrc',
        '_.eslintrc.js': '.eslintrc.js',
        '_jsconfig.json': 'jsconfig.json'
      }
    })

    actions.push({
      type: 'modify',
      files: 'package.json',
      handler (data) {
        delete data.scripts['']
        delete data.dependencies['']
        delete data.devDependencies['']
        return data
      }
    })

    return actions
  },
  async completed () {
    this.gitInit()

    await this.npmInstall({ npmClient: this.answers.pm })

    const options = ['run', 'lint', '--', '--fix']
    if (this.answers.pm === 'yarn') {
      options.splice(2, 1)
    }
    spawn.sync(this.answers.pm, options, {
      cwd: this.outDir,
      stdio: 'inherit'
    })

    const chalk = this.chalk
    const isNewFolder = this.outDir !== process.cwd()
    const relativeOutFolder = relative(process.cwd(), this.outDir)
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : ''
    const pmRun = this.answers.pm === 'yarn' ? 'yarn' : 'npm run'

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
  }
}
