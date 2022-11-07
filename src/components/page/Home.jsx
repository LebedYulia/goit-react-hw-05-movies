import { useState, useEffect } from 'react';
import { getTrendingMovies } from '../services/Api';




export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesList() {
      try {
        const moviesList = await getTrendingMovies();
        console.log(moviesList);
        setMovies(moviesList);
      } catch (error) {
        console.log(error);
      }
    }

    getMoviesList();
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <li key={id}>{title}</li>
        ))}
      </ul>
    </>
  );
};


