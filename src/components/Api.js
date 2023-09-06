import axios from 'axios';

// axios.defaults.baseURL = 'https://api.themoviedb.org/3/trending/all/day';
// const key = '17ba0079ffc0f915ca44faf094699a42';

// export const getResponse = async (query, page) => {
//   const response = await axios.get(`? language: 'en-US'&api_key=${key}`);

//   return response.data;
// };

// const options = {
//   method: 'GET',
//   url: 'https://api.themoviedb.org/3/trending/all/day',
//   params: { language: 'en-US' },
//   headers: {
//     accept: 'application/json',
//     Authorization:
//       'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2JhMDA3OWZmYzBmOTE1Y2E0NGZhZjA5NDY5OWE0MiIsInN1YiI6IjY0ZjRjYjc1OWU0NTg2MDExZGU2YjI5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7tXOVTtl4laXPE3MmR9v9s2frF2ianV7tipkyHirJNw',
//   },
// };

export const getResponse = async options => {
  const response = await axios.request(options);
  return response;
};
