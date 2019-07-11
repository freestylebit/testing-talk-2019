import { Going, ProprietaryMethod } from './ProprietaryMethod';

it('runs ProprietaryMethod and returns a number', () => {
  expect(ProprietaryMethod()).toEqual('Never Gonna Give You Up');
});

it('expects "Going" to yield "Gonna"', () => {
  expect(Going).toEqual('Gonna');
});
