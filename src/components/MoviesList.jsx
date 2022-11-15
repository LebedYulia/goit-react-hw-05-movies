import React from 'react';
import { Link, useLocation } from 'react-router-dom';

export const MoviesList = ({ id, title }) => {
  const location = useLocation();
 
  return (
    <Link to={`/movies/${id}`} state = {{from: location}}>
      <li>{title}</li>
    </Link>
  );
};
