import axios from 'axios';
import Users from './Users';

jest.mock('axios');

it('should fetch users', () => {
  const resp = { data: 'Rick Astley' };
  axios.get.mockResolvedValue(resp);

  return Users.all().then(data => expect(data).toEqual('Rick Astley'));
});
