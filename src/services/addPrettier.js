const fs = require('fs')
const spawn = require('child_process').spawnSync
const {updatePackageJsonWithNewCommands} = require('./updatePackageJsonWithNewCommands')

function addPrettier(projectName) {
    console.log('Adding prettier support...')
    spawn('npm', ['install', 'prettier', 'eslint-config-prettier', 'eslint-plugin-prettier', '--save-dev'], {
        cwd: `${process.cwd()}/${projectName}`,
        shell: true,
        stdio: 'inherit'
    })
    updatePackageJsonWithNewCommands(projectName, {
        "format": "prettier --config .prettierrc --write ."
    })

    // Copy .prettierrc file
    fs.copyFileSync(`${__dirname}/configs/.prettierrc`, `${process.cwd()}/${projectName}/.prettierrc`)
    fs.copyFileSync(`${__dirname}/configs/.prettierignore`, `${process.cwd()}/${projectName}/.prettierignore`)
}

module.exports = {
    addPrettier
}
