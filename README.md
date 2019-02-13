Setting up our testing environment is easy. In previous versions of the Vue.js CLI, we had to do this manually, but now it comes as standard with the project generation.

Create a new project with the CLI with Unit Testing set as Jest.

Now that we’ve generated our Vue project with Jest, we can navigate to the tests/unit folder. Inside of this folder, we have a file named example.spec.js.

$ npm run test:unit

We can add the --watch flag to this to keep this running in the background as we create and edit new tests.

"scripts": {
  "test:unit": "vue-cli-service test:unit --watch"
}

In order to unit test each component, we’ll need to make a corresponding Component.spec.js file within the tests/unit directory.

A test suite can be thought of as a collection of tests centered around testing a particular module or functionality.

Please see these for comments on basics of how to structure a unit test. 