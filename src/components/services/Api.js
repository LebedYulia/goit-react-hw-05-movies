import axios from 'axios';

const KEY = 'f15e9a3194e113470990f4a0e5a9c33f';
const baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async () => {
  const config = {
    baseURL,
    params: {
      api_key: KEY,
    },
  };

  const response = await axios.get('/trending/movie/day', config);
  const data = await response.data;
  console.log(data);
  return data.results;
};
