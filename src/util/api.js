import axios from 'axios';
import CONST from '../config';

export function postOrder(order) {
  return axios.post(`${CONST.REACT_APP_API_URL}/api/orders`, order);
}

