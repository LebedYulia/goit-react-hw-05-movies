import { useState, useEffect, Suspense } from 'react';
import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { HiArrowLeft } from 'react-icons/hi';
import { ThreeDots } from 'react-loader-spinner';
import toast from 'react-hot-toast';
import { getMovieById } from 'components/services/Api';
import { MovieCard } from '../MovieCard/MovieCard';

const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  const location = useLocation();
  

  useEffect(() => {
    async function getMovieDitails() {
      try {
        const movieInfo = await getMovieById(movieId);
        setMovie(movieInfo);
      } catch (error) {
        console.log(error);
        toast.error('Ooops! Something went wrong. Try again.')
      }
    }

    getMovieDitails();
  }, [movieId]);

  if (!movie) {
    return;
  }
  const { poster_path, title, vote_average, overview, genres = [] } = movie;
  const genresList = genres.map(genre => genre.name).join(', ');
  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const altPosterUrl = `https://via.placeholder.com/360x540.png?text=${title}`;

  return (
    <>
      <Link to={location.state?.from ?? '/'}>
        <HiArrowLeft size="16" /> Go to back
      </Link>
      <MovieCard
        poster_path={poster_path ? `${baseImgUrl}${poster_path}` : altPosterUrl}
        title={title}
        vote_average={vote_average}
        overview={overview}
        genres={genresList}
      />
      <h3>Additional information</h3>
      <ul>
        <li>
          <Link to="cast" state={{ from: location.state?.from ?? '/' }}>
            Cast
          </Link>
        </li>
        <li>
          <Link to="reviews" state={{ from: location.state?.from ?? '/' }}>
            Reviews
          </Link>
        </li>
      </ul>
      <Suspense fallback={ <ThreeDots color="red" wrapperStyle={{ margin: 'auto' }} />}>
        <Outlet />
      </Suspense>
    </>
  );
};

export default MovieDetails;
