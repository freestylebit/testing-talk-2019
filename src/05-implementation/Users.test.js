import Users from './Users';
import VeryComplicatedCode from './VeryComplicatedCode';

// jest.mock('./VeryComplicatedCode');

it('should increment dynamically', () => {
  const generator = Users();

  // VeryComplicatedCode.mockImplementation(() => 7);

  expect(generator.next().value).toEqual(0);
  expect(generator.next().value).toEqual(1);
  expect(generator.next().value).toEqual(2);
  expect(generator.next().value).toEqual(3);
  expect(generator.next().value).toEqual(11);

  // VeryComplicatedCode.mockImplementation(() => 9);

  expect(generator.next().value).toEqual(20);
});
