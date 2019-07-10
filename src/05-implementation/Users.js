import axios from 'axios';
import VeryComplicatedCode from './VeryComplicatedCode';

function Users() {
  return axios.get('/users.json').then(resp => resp.data);
}

export default Users;

// console.log(VeryComplicatedCode());
