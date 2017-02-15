import axios from 'axios';
import CONST from '../config';

export function postOrder(order) {
  return axios.post(`${CONST.API_URL}/orders`, order);
}

