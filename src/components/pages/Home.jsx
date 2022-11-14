import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getTrendingMovies } from 'components/services/Api';
import { MoviesList } from 'components/MoviesList';

export const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    const controller = new AbortController();
    const signal = controller.signal;
    

    async function getMoviesList() {
      try {
        const moviesList = await getTrendingMovies(signal);
        console.log(moviesList);
        setMovies([...moviesList]);
      } catch (error) {
        console.log(error);
        toast.error('Ooops!')
      }
    }

    getMoviesList();

    return () => {
      controller.abort();
    };
  }, []);

  return (
    <>
      <h1>Trending today</h1>
      <ul>
        {movies.map(({ id, title }) => (
          <MoviesList key={id} title={title} id={id}/>
        ))}
      </ul>
    </>
  );
};
