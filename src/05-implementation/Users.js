import axios from 'axios';
import VeryComplicatedCode from './VeryComplicatedCode';

// function Users() {
//   return axios.get('/users.json').then(resp => resp.data);
// }

function* Users() {
  let tracker = 0;
  while (true) {
    if (tracker > 2) {
      yield VeryComplicatedCode();
    }
    yield tracker++;
  }
}

export default Users;
