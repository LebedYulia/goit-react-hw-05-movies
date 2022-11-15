import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

export const MoviesList = ({ id, title }) => {
  const location = useLocation();
 
  return (
    <Link to={`/movies/${id}`} state = {{from: location}}>
      <li>{title}</li>
    </Link>
  );
};

MoviesList.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};