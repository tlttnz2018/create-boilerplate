const fs = require('fs')

function createProjectSourceDirectory(projectName) {
    console.log('Creating src directory...')
    if (!fs.existsSync(`${projectName}/src`)) {
        fs.mkdirSync(`${projectName}/src`)
    }
}

module.exports = {
    createProjectSourceDirectory
}
