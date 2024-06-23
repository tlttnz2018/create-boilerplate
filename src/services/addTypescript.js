const spawn = require("child_process").spawnSync;
const fs = require("fs");
const { updatePackageJsonWithNewCommands } = require("./updatePackageJsonWithNewCommands");

function addTypescript(projectName) {
    console.log('Adding typescript support...')
    spawn('npm', ['install', 'typescript', 'nodemon', 'rimraf', 'ts-node', '--save-dev'], {
        cwd: `${process.cwd()}/${projectName}`,
        shell: true,
        stdio: 'inherit'
    })

    // Copy tsconfig.json file
    fs.copyFileSync(`${__dirname}/configs/tsconfig.json`, `${process.cwd()}/${projectName}/tsconfig.json`)
    fs.copyFileSync(`${__dirname}/configs/tsconfig.build.json`, `${process.cwd()}/${projectName}/tsconfig.build.json`)

    // Update package.json
    updatePackageJsonWithNewCommands(projectName, {
        "clean": "rimraf ./dist",
        "build": "npm run clean && tsc -p tsconfig.build.json",
        "start": "node dist/index.js",
        "local": "ts-node src",
        "local:watch": "nodemon src -e ts,json --exec 'npm run local'"
    });
}

module.exports = {
    addTypescript
}
