import Math from './Math';

it('adds two numbers together and returns a product', () => {
  expect(Math.AddTwoNumbersTogether(4, 5)).toEqual(9);
});

it('multiplies two numbers together and returns a product', () => {
  expect(Math.MultiplyTwoNumbersTogether(3, 2)).toEqual(6);
});

// Very proprietary code below
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
// it('adds a strings that is actually a number and a real number together and returns the sum', () => {
//   expect(Math.AddTwoNumbersTogether('7', 4)).toEqual(11);
// });
// it('adds a real number and a string that is actually a number together and returns the sum', () => {
//   expect(Math.AddTwoNumbersTogether(7, '4')).toEqual(11);
// });

// it('adds two strings that might be a number together and returns a sum', () => {
//   expect(Math.AddTwoNumbersTogether('two', 'six')).toEqual(8);
// });

// it('multiplies two floating values together and returns the product', () => {
//   expect(Math.MultiplyTwoNumbersTogether(0.1, 0.2)).toEqual(0.02);
// });

// it('tries to multiply two strings and returns a product', () => {
//   expect(Math.MultiplyTwoNumbersTogether('seven', 'seven')).toEqual(49);
// });

// it('tries to multiply two strings that are not numbers and yells at the developer', () => {
//   expect(Math.MultiplyTwoNumbersTogether('Never', 'going')).toEqual("I don't like you");
// });
