import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from '../SharedLayout/SharedLayout';
import { Home } from 'components/pages/Home';
import { Movies } from 'components/pages/Movies';
import { MovieDetails } from 'components/MovieDetails';
import { Cast } from 'components/Cast';
import { Reviews } from 'components/Reviews';

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/:movieId" element={<MovieDetails />}>
            <Route path="cast" element={<Cast />} />
            <Route path="reviews" element={<Reviews />} />
          </Route>
          {/* <Route path="*" element={<NotFound />} />  */}
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
