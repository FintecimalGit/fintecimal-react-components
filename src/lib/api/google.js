import axios from 'axios';
import { getServer } from './keys';

const getAddress = async ({ value }) => {
  try {
    if (!value) return [];
    const { baseURL } = getServer();
    const url = `${baseURL}/api/googleapis/places?name=${value}&showDetails=true`;
    const { data } = await await axios.get(url);
    return data;
  } catch (err) {
    return null;
  }
};

export {
  getAddress
};
