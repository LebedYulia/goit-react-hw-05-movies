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

  return (
    <>
      <h2>Cast</h2>
      <ul>
        {credits.map(({ name, profile_path }) => (
          <li key={name}>
            <img src={`${baseImgUrl}${profile_path}`} alt={name} width="160" />
            <p>{name}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
