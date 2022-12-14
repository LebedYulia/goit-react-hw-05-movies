import React from 'react';
import { Container, InfoBox } from './MovieCard.styled';
import PropTypes from 'prop-types';


export const MovieCard = ({
  poster_path,
  title,
  vote_average,
  overview,
  genres,
}) => {
  return (
    <Container>
      <div>
        <img src={poster_path} alt={title} width='360'/>
      </div>
      <InfoBox>
        <h2>{title}</h2>
        <p>
          <b>User score:</b> {vote_average}
        </p>
        <p>
          <b>Genres:</b> {genres}
        </p>
        <p>
          <b>Overview:</b> {overview}
        </p>       
      </InfoBox>
    </Container>
  );
};

MovieCard.propTypes = {
  poster_path: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  vote_average: PropTypes.number.isRequired,
  overview: PropTypes.string,
  genres: PropTypes.string.isRequired,
};
