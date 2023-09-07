import axios from 'axios';

export const getResponse = async options => {
  const response = await axios.request(options);
  return response;
};
