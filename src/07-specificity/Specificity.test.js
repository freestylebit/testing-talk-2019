import Specificity from './Specificity';

it('tests that the JSON payload matches', () => {
  const payload = [
    'together',
    'forever',
    'and',
    'never',
    'to',
    'part',
    'together',
    'forever',
    'we',
    'two',
    'and',
    "don't",
    'you',
    'know',
    'I',
    'would',
    'move',
    'heaven',
    'and',
    'earth',
    'to',
    'be',
    'together',
    'forever',
    'with',
    'you',
  ];

  expect(Specificity()).toEqual(payload);
  // Try `.toContain` here
});
