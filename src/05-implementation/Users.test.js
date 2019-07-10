import axios from 'axios';
import Users from './Users';
import VeryComplicatedCode from './VeryComplicatedCode';

jest.mock('axios');

it('should fetch users', () => {
  const resp = { data: 'Rick Astley' };
  axios.get.mockResolvedValue(resp);

  return Users().then(data => expect(data).toEqual('Rick Astley'));
});

// jest.mock('./VeryComplicatedCode');
// VeryComplicatedCode.mockImplementation(() => 'NEVER');
