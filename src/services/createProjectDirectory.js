const fs = require("fs");

function createProjectDirectory(projectName) {
    if (!fs.existsSync(projectName)) {
        fs.mkdirSync(projectName)
    } else {
        console.log('Directory already exists')
        process.exit(1)
    }
}

module.exports = {
    createProjectDirectory
}

