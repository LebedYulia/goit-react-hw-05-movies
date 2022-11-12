import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getMovieAddInfo } from 'components/services/Api';

export const Cast = () => {
  const { movieId } = useParams();
  const [credits, setCredits] = useState(null);

  useEffect(() => {
    async function getCastInfo() {
      try {
        const response = await getMovieAddInfo(movieId, 'credits');
        setCredits(response.cast);
      } catch (error) {
        console.log(error);
      }
    }
    getCastInfo();
  }, [movieId]);

  if (!credits) {
    return;
  }

  const baseImgUrl = 'https://image.tmdb.org/t/p/w500';
  const altPosterUrl =
    'https://www.vaureal.fr/sites/vaureal/files/styles/_site_contenu_image_principale/public/image/2022-03/Solidarit%C3%A9%20ukraine.jpg?itok=Gcqq2tD3';

  return (
    <>
      <h2>Cast</h2>
      <ul>
        {credits.map(({ name, profile_path }) => (
          <li key={name}>
            <img
              src={profile_path ? `${baseImgUrl}${profile_path}` : altPosterUrl}
              alt={name}
              width="160"
            />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
