//@concept GLOBAL TEST
//@context Here will be the tests for the global file.
//@o It's important to add the .test suffix to tell the compiler that this file it's about tests and not included into the build.

const text = 'Hello World!';
const fruits = ['apple', 'melon', 'banana'];

/**
 * @a Declare the test, that will receive 2 props.
 * @o 1. The expected description
 * @o 2. An anonymous function that will deploy the test.
*/
// @concept String comparison test
test('Must have matching text', () => {
  //@a Declare the expect variable that defines what to expect and the comparison
  expect(text).toMatch(/World/);
});


// @concept Array comparison test
test('Must contain a banana', () => {
  expect(fruits).toContain('banana');
});


// @concept Numbers comparison test
test('Greater than 10', () => {
  expect(10).toBeGreaterThan(9);
});


// @concept Boolean comparison test
test(`It's true?`, () => {
  expect(true).toBeTruthy();
});


// @concept Boolean comparison test
test(`It's False?`, () => {
  expect(false).toBeFalsy();
});


// @concept Callback comparison test

// @o This callback receives an string, split it and reverse the content.
const reverseString = (str, callback) => {
  callback(str.split('').reverse().join(''));
}

test(`Testing a callback`, () => {
  reverseString('Hello', (str) => {
    expect(str).toBe('olleH');
  })
});

/**
 * @concept Test only one test
 * @o To use this technique it's necessary to install globally jest
 * @tst >sudo npm i -g jest
 * @a Use the following code changing the route for the test
 * @tst >jest src/__test__/global.test.js
 * ----------------------------------------------------------------
 * @o If you want to test from a project with jest installed and configured to npm run test
 * @a Declare the test with jest script into the package file
 * @context "test": "jest"
 * @a Use the following code changing the route for the test
 * @tst >npm run test -- src/__test__/global.test.js
 *
 * ##----------------------------------------------------------------
 *
 * @concept Watch for changes on tests.
 * @o To automatize the process. While you build the test suite, Jest can watch for changes.
 * @a Declare a new script on package.json
 * @context "test:watch": "jest --watch"
 *
 * ##----------------------------------------------------------------
 *
 * @concept Coverage Report
 * @o Jest can report the coverage of the project tests. This will generate a visual report.
 * @o Located in ./coverage/Icov-report/index.html
 * @a Declare a new script on package.json
 * @context "test:coverage": "jest --coverage"
 */
