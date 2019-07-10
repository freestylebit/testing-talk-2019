import axios from 'axios';

function Users() {
  return axios.get('/users.json').then(resp => resp.data);
}

export default Users;
