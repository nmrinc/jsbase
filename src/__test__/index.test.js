//@o To test functionality of functions declared into other file you can import it.
const randomStrings = require('../index');

//@concept Test Suite
//@context This way you describe a series of tests, grouping them by a single concept
describe('Functionalities test for random strings', () => {
  test('Test functionality', () => {
    //@a Test the output type of the function
    expect(typeof (randomStrings())).toBe('string');
  });

  test(`Test if a city doesn't exists`, () => {
    expect(randomStrings()).not.toMatch(/Cordoba/);
  })
});