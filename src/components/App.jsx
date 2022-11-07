import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Home } from './page/Home';
import { Movies } from './page/Movies';
import { Container, Header, Link } from './App.styled';

export const App = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/" end>Home</Link>
          <Link to="/movies">Movies</Link>
        </nav>
      </Header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        {/* <Route path="*" element={<NotFound />} />  */}
      </Routes>
    </Container>
  );
};
