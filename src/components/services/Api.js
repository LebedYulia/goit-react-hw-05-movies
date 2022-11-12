import axios from 'axios';

const KEY = 'f15e9a3194e113470990f4a0e5a9c33f';
const baseURL = 'https://api.themoviedb.org/3';

export const getTrendingMovies = async signal => {
  const config = {
    baseURL,
    signal,
    params: {
      api_key: KEY,
      language: 'en-ru',
    },
  };

  const response = await axios.get('/trending/movie/day', config);
  const data = await response.data;
  console.log(data);
  return data.results;
};

export const getMovieById = async id => {
  const config = {
    baseURL,
    params: {
      api_key: KEY,
      language: 'en-ru',
    },
  };

  const response = await axios.get(`/movie/${id}`, config);
  const data = await response.data;
  console.log(data);
  return data;
};

export const getImageByQuery = async searchQuery => {
  const config = {
    baseURL,
    params: {
      api_key: KEY,
      language: 'en-ru',
      query: searchQuery,
    },
  };

  const response = await axios.get(`search/movie`, config);
  const data = await response.data;
  console.log(data);
  return data.results;
};

export const getMovieAddInfo = async (id, option) => {
  const config = {
    baseURL,
    params: {
      api_key: KEY,
      language: 'en-ru',
    },
  };

  const response = await axios.get(`/movie/${id}/${option}`, config);
  const data = await response.data;
  console.log(data);
  return data;
};
