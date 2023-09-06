import { Link, Outlet, useLocation, useParams } from 'react-router-dom';
import { getResponse } from 'components/Api';
import { useEffect, useState } from 'react';

export const MovieDetails = () => {
  const [card, setCard] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}`,
    params: { language: 'en-US' },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2JhMDA3OWZmYzBmOTE1Y2E0NGZhZjA5NDY5OWE0MiIsInN1YiI6IjY0ZjRjYjc1OWU0NTg2MDExZGU2YjI5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7tXOVTtl4laXPE3MmR9v9s2frF2ianV7tipkyHirJNw',
    },
  };
  useEffect(() => {
    getResponse(options)
      .then(response => {
        setCard(response.data);
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Link to={location.state.from}>Go back</Link>
      <div>
        <img
          src={`https://image.tmdb.org/t/p/original/${card.poster_path}`}
          height={200}
          alt=""
        />
        <h1>
          {card.title} ({card.release_date})
        </h1>
        <p>User Score: {Math.round(card.vote_average * 10)}%</p>
        <h2>Overview</h2>
        <p>{card.overview}</p>
        <h3>Genres</h3>
        <ul>
          {genres.map(gen => (
            <li key={gen.id}>{gen.name}</li>
          ))}
        </ul>
      </div>
      <div>
        {' '}
        <h2>Additional information</h2>
        <nav>
          <Link to="cast">Cast</Link>
          <Link to="reviews">Reviews</Link>
        </nav>{' '}
        <Outlet />
      </div>
    </div>
  );
};