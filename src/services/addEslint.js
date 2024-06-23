const fs = require('fs');
const spawn = require('child_process').spawnSync;
const {updatePackageJsonWithNewCommands} = require('./updatePackageJsonWithNewCommands');

function addEslint(projectName) {
    console.log('Adding eslint support...')
    // Have to use eslint@8.56.0 for compatible with typescript
    spawn('npm', ['install',
        'eslint@8.56.0',
        '@typescript-eslint/eslint-plugin',
        '@typescript-eslint/parser',
        'eslint-config-prettier',
        'eslint-plugin-prettier',
        'eslint-plugin-simple-import-sort',
        '--save-dev'], {
        cwd: `${process.cwd()}/${projectName}`,
        shell: true,
        stdio: 'inherit'
    })
    // Update package.json for eslint
    updatePackageJsonWithNewCommands(projectName, {
        "lint": "eslint",
        "lint:fix": "eslint src/** --fix --cache",
    });

    // Copy .eslintrc file
    fs.copyFileSync(`${__dirname}/configs/.eslintrc.json`, `${process.cwd()}/${projectName}/.eslintrc.json`)
    fs.copyFileSync(`${__dirname}/configs/.eslintignore`, `${process.cwd()}/${projectName}/.eslintignore`)
}

module.exports = {
    addEslint
}
