import { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { SharedLayout } from 'components/SharedLayout/SharedLayout';
import { NotFound } from 'components/NotFound';

const Home = lazy(() => import('components/pages/Home'));
const Movies = lazy(() => import('components/pages/Movies'));
const MovieDetails = lazy(() => import('components/pages/MovieDetails'));
const Cast = lazy(() => import('components/Cast'));
const Reviews = lazy(() => import('components/Reviews'));

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>          
            <Route index element={<Home />} />
            <Route path="movies" element={<Movies />} />
            <Route path="/movies/:movieId" element={<MovieDetails />}>
              <Route path="cast" element={<Cast />} />
              <Route path="reviews" element={<Reviews />} />
            </Route>
            <Route path="*" element={<NotFound />} />          
        </Route>
      </Routes>
      <Toaster />
    </>
  );
};
