import React from 'react';
import { Link } from 'react-router-dom';

export const MoviesList = ({ id, title }) => {
  return (
    <Link to={`/movies/${id}`}>
      <li>{title}</li>
    </Link>
  );
};
