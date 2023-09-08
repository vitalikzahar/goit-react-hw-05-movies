import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const key = '17ba0079ffc0f915ca44faf094699a42';

export const getResponse = async (params, querys) => {
  const response = await axios.get(`/${params}?query=${querys}&api_key=${key}`);

  return response;
};
