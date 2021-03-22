//@concept GLOBAL TEST
//@context Here will be the tests for the global file.
//@o It's important to add the .test suffix to tell the compiler that this file it's about tests and not included into the build.

const text = 'Hello World!';
/**
 * @a Declare the test, that will receive 2 props.
 * @o 1. The expected description
 * @o 2. An anonymous function that will deploy the test.
*/
test('Must have matching text', () => {
  //@a Declare the expect variable that defines what to expect and the comparison
  expect(text).toMatch(/World/);
});

/**
 * @concept Test only one test
 * @o To use this technique it's necessary to install globally jest
 * @a Use the following code changing the route for the test
 * @tst >jest src/__test__/global.test.js
 * ##----------------------------------------------------------------
 * @o If you want to test from a project with jest installed and configured to npm run test
 * @a Declare the test with jest script into the package file
 * @context "test": "jest"
 * @a Use the following code changing the route for the test
 * @tst >npm run test -- src/__test__/global.test.js
 */
