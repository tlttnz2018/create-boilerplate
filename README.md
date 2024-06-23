# Context

I'm so boring with the default configuration of `eslint`, `typescript` and `node` application. Currently, for web ui, we can use `vite` but there is no similar thing for simple node application.
Hence, I create this create-boilerplate to scaffold a simple node application using `npx` command.

# Using github
## Checkout this repository
```
git clone git@github.com:tlttnz2018/create-boilerplate.git
```
## Link this module to global
```
cd create-boilerplate
npm link
```

## Create a new project
This script will create a project folder with the name `<project-name>` in the current directory.

```
npx create-boilerplate <project-name>
```

# Using global npm
## Install this module globally
```
npm install -g git+ssh://git@github.com:tlttnz2018/create-boilerplate.git
```

## Create a new project
This script will create a project folder with the name `<project-name>` in the current directory.

```
npx create-boilerplate <project-name>
```

# Scaffolded items
- Project folder structure with `src` directory
- Git
- Default npm package.json
- Vitest for testing
- Prettier for code formatting
- Eslint for code linting
- Typescript support for node application
