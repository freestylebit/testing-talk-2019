import wordsToNumbers from 'words-to-numbers';

import ThirdParty from './ThirdParty';

it('tests if typing "one hundred" equals "100"', () => {
  expect(wordsToNumbers('one hundred')).toEqual(100);
});

it('test if writing a complicated number as a string equals its numerical equivalent', () => {
  expect(wordsToNumbers('six million five thousand and two')).toEqual(6005002);
});

it('tests is 5 quintillion actually equals that long number', () => {
  expect(wordsToNumbers('five quintillion')).toEqual(5000000000000000000);
});

// it('tests to see if I have one hundred coconuts', () => {
//   expect(ThirdParty()).toEqual('I have 100 coconuts');
// });
