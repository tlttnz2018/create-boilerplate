const fs = require("node:fs");

function updatePackageJsonWithNewCommands(projectName, newCommands) {
    const packageJson = JSON.parse(fs.readFileSync(`${process.cwd()}/${projectName}/package.json`, 'utf8'))
    packageJson.scripts = {
        ...packageJson.scripts,
        ...newCommands
    }
    fs.writeFileSync(`${process.cwd()}/${projectName}/package.json`, JSON.stringify(packageJson, null, 2))
}

module.exports = {
    updatePackageJsonWithNewCommands
}
