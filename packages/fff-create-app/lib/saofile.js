const { dirname, join, relative } = require('path')
const spawn = require('cross-spawn')
const validate = require('validate-npm-package-name')
const pkg = require('./package')

const cnaTemplateDir = join(
  dirname(require.resolve('@formfunfunction/nuxt-template/package.json'))
)
const templateDir = join(cnaTemplateDir, 'template')
const frameworksDir = join(templateDir, 'frameworks')

module.exports = {
  prompts: require('./prompts'),
  templateData () {
    return {}
  },
  actions () {
    const validation = validate(this.answers.name)
    validation.warnings &&
      validation.warnings.forEach((warn) => {
        console.warn('Warning:', warn)
      })
    validation.errors &&
      validation.errors.forEach((err) => {
        console.error('Error:', err)
      })
    validation.errors && validation.errors.length && process.exit(1)

    const actions = [
      {
        type: 'add',
        files: '**',
        templateDir: join(templateDir, 'nuxt')
      }
    ]

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
        '_.stylelintrc.json': '.stylelintrc.json'
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

    await this.npmInstall({ npmClient: 'npm' })

    // Eslint
    const eslintOptions = ['run', 'lint:js', '--', '--fix']
    spawn.sync('npm', eslintOptions, {
      cwd: this.outDir,
      stdio: 'inherit'
    })

    // Stylelint
    const slOptions = ['run', 'lint:style', '--', '--fix']
    spawn.sync('npm', slOptions, {
      cwd: this.outDir,
      stdio: 'inherit'
    })

    const chalk = this.chalk
    const isNewFolder = this.outDir !== process.cwd()
    const relativeOutFolder = relative(process.cwd(), this.outDir)
    const cdMsg = isNewFolder ? chalk`\t{cyan cd ${relativeOutFolder}}\n` : ''
    const pmRun = 'npm run'

    console.log(
      chalk`\n🎉  {bold Successfully created project} {cyan ${this.answers.name}}\n`
    )

    console.log(chalk`  {bold To get started:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} dev}\n`)

    console.log(chalk`  {bold To build & start for production:}\n`)
    console.log(chalk`${cdMsg}\t{cyan ${pmRun} build}`)
    console.log(chalk`\t{cyan ${pmRun} start}\n`)

    console.log(
      chalk`\n  {bold For TypeScript users.} \n\n  See : https://typescript.nuxtjs.org/cookbook/components/`
    )
  }
}
