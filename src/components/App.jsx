import { Home } from 'pages/Home/Home';
import { MovieDetails } from 'pages/MovieDetails/MovieDetails';
import { Movies } from 'pages/Movies/Movies';
import { Link, Route, Routes } from 'react-router-dom';
import { Cast } from 'pages/Cast/Cast';
import { Reviews } from '../pages/Reviews/Reviews';
import { Nav } from './App.styled';

export const App = () => {
  return (
    <div>
      <header>
        <Nav>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </Nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/movies/:movieId" element={<MovieDetails />}>
          <Route path="cast" element={<Cast />} />
          <Route path="/movies/:movieId/reviews" element={<Reviews />} />
          <Route path="*" element={<Movies />} />
        </Route>

        <Route path="*" element={<Home />} />
      </Routes>
    </div>
  );
};
