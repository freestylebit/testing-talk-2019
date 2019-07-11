import axios from 'axios';
import VeryComplicatedCode from './VeryComplicatedCode';

function* Users() {
  let tracker = 0;
  while (true) {
    if (tracker > 3) {
      tracker += VeryComplicatedCode();
      yield tracker;
    } else {
      yield tracker++;
    }
  }
}

export default Users;
