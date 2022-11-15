import { useState, useEffect } from 'react';
import toast from 'react-hot-toast';
import { getTrendingMovies } from 'components/services/Api';
import { MoviesList } from 'components/MoviesList';

 const Home = () => {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function getMoviesList() {
      try {
        const moviesList = await getTrendingMovies();        
        setMovies([...moviesList]);
      } catch (error) {
        console.log(error);
        toast.error('Ooops! Something went wrong. Try again.')
      }
    }
    getMoviesList();    
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
 export default Home;