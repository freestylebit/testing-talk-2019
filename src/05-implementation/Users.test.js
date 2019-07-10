import axios from 'axios';
import Users from './Users';
import VeryComplicatedCode from './VeryComplicatedCode';

// jest.mock('axios');

// it('should fetch users', () => {
//   const resp = { data: 'Rick Astley' };
//   axios.get.mockResolvedValue(resp);

//    Users().then(data => expect(data).toEqual('Rick Astley'));
// });

jest.mock('./VeryComplicatedCode');

it('should equal 11', () => {
  VeryComplicatedCode.mockImplementation(() => 9);

  expect(Users()).toEqual(16);
});
