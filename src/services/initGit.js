const {simpleGit} = require('simple-git')

async function initGit(projectName) {
    console.log('Initializing git...')
    const simpleGitInstance = simpleGit({
        baseDir: `${process.cwd()}/${projectName}`,
        binary: 'git',
        maxConcurrentProcesses: 6,
    })

    await simpleGitInstance.init().then(() => {
        console.log('Git initialized')
    })
}

module.exports = {
    initGit
}
