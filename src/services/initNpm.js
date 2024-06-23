const spawn = require('child_process').spawnSync

function initNpm(projectName) {
    console.log('Initializing npm...')
    spawn('npm', ['init'], {
        cwd: `${process.cwd()}/${projectName}`,
        shell: true,
        stdio: 'inherit'
    })
}

module.exports = {
    initNpm
}
