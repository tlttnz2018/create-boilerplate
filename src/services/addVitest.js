const spawn = require('child_process').spawnSync
const {updatePackageJsonWithNewCommands} = require('./updatePackageJsonWithNewCommands')

function addVitest(projectName) {
    console.log('Adding vitest as test mechanism...')
    spawn('npm', ['install', 'vitest', '@types/node', '--save-dev'], {
        cwd: `${process.cwd()}/${projectName}`,
        shell: true,
        stdio: 'inherit'
    })

    updatePackageJsonWithNewCommands(projectName, {
        "test": "vitest run",
        "test:dev": "vitest dev",
        "test:cov": "vitest run --coverage",
    })
}

module.exports = {
    addVitest
}
