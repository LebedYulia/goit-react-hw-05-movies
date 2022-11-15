import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { getMovieAddInfo } from 'components/services/Api';

const Reviews = () => {
  const { movieId } = useParams();
  const [movieReveiws, setMovieReviews] = useState(null);

  useEffect(() => {
    async function getReviewsInfo() {
      try {
        const response = await getMovieAddInfo(movieId, 'reviews');
        setMovieReviews(response.results);
      } catch (error) {
        console.log(error);
      }
    }
    getReviewsInfo();
  }, [movieId]);

  if (!movieReveiws) {
    return;
  }
  return (
    <>
      <h2>
        {movieReveiws.length !== 0
          ? 'Reviews'
          : "We don't have any review for this movie."}
      </h2>
      <ul>
        {movieReveiws.map(({ author, content }) => (
          <li key={author}>
            <p>
              <b>Author: </b>
              {author}
            </p>
            <p>{content}</p>
          </li>
        ))}
      </ul>
    </>
  );
};
Reviews.propTypes = {
  author: PropTypes.string,
  content: PropTypes.string,  
};

export default Reviews;
