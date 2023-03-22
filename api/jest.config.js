// More info at https://redwoodjs.com/docs/project-configuration-dev-test-build

const config = {
  rootDir: '../',
  preset: '@redwoodjs/testing/config/jest/api',
  setupFiles: [`api/.jest/setEnvVars.js`]
}

module.exports = config
