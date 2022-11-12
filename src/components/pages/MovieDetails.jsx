import { useState, useEffect } from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import { getMovieById } from 'components/services/Api';
import { MovieCard } from '../MovieCard/MovieCard';

export const MovieDetails = () => {
  const { movieId } = useParams();
  const [movie, setMovie] = useState(null);
  console.log(movieId);

  useEffect(() => {
    async function getMovieDitails() {
      try {
        const movieInfo = await getMovieById(movieId);
        setMovie(movieInfo);
      } catch (error) {
        console.log(error);
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
  const altPosterUrl =
    'https://www.vaureal.fr/sites/vaureal/files/styles/_site_contenu_image_principale/public/image/2022-03/Solidarit%C3%A9%20ukraine.jpg?itok=Gcqq2tD3';

  return (
    <>
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
          <Link to="cast">Cast</Link>
        </li>
        <li>
          <Link to="reviews">Reviews</Link>
        </li>
      </ul>
      <Outlet />
    </>
  );
};
