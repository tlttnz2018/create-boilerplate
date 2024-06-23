#!/usr/bin/env node
const { Command } = require('commander');
const { createProjectDirectory } = require('./services/createProjectDirectory');
const { initGit } = require('./services/initGit');
const { initNpm } = require('./services/initNpm');
const { createProjectSourceDirectory } = require('./services/createProjectSourceDirectory');
const { addVitest } = require('./services/addVitest');
const { addPrettier } = require('./services/addPrettier');
const { addEslint } = require('./services/addEslint');
const { addTypescript } = require('./services/addTypescript');

const program = new Command()
program
    .name('create-boilerplate')
    .description('JS/TS new project boilerplate generator')
    .version('1.0.0')

program
    .argument('<project-name>', 'Name of the project')
    .requiredOption('-t, --template <type>', 'Template for new project', 'simple') // simple, express, react
    .option('-ts, --typescript', 'Using Typescript instead', false)

program.parse()

const options = program.opts();
const projectName = program.args[0]

console.log(`${options.template} boiler plate code generator`)

async function initTemplate(projectName, options) {
    // Create a new directory
    console.log('Creating new project directory...')

    createProjectDirectory(projectName);
    await initGit(projectName);
    initNpm(projectName);
    createProjectSourceDirectory(projectName);
    addVitest(projectName);
    addPrettier(projectName);
    addEslint(projectName);

    // Add support for typescript
    if(options.typescript) {
        addTypescript(projectName);
    }
}

initTemplate(projectName, options).then(() => {
    console.log('Project created successfully')
})
