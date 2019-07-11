import Specificity from './Specificity';

it('tests that the JSON payload matches', () => {
  const payload = ['together', 'forever', 'and', 'never', 'to', 'part'];

  expect(Specificity).toEqual(payload);
});
