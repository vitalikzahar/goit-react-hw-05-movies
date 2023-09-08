import { Outlet, useLocation, useParams } from 'react-router-dom';
import { getResponse } from 'components/Api';
import { useEffect, useRef, useState } from 'react';
import {
  FilmCard,
  NavButton,
  StyledLink,
  StyledNav,
  Title,
} from './MovieDetails.styled';

const MovieDetails = () => {
  const [card, setCard] = useState([]);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');
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
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <NavButton to={goBack.current}>Go back</NavButton>
      <FilmCard>
        <img
          src={`https://image.tmdb.org/t/p/original/${card.poster_path}`}
          height={350}
          alt=""
        />
        <div>
          <Title>
            {card.title} ({card.release_date})
          </Title>
          <p>User Score: {Math.round(card.vote_average * 10)}%</p>
          <h3>Overview</h3>
          <p>{card.overview}</p>
          <h4>Genres</h4>
          <ul>
            {genres.map(gen => (
              <li key={gen.id}>{gen.name}</li>
            ))}
          </ul>
        </div>
      </FilmCard>
      <div>
        {' '}
        <h2>Additional information</h2>
        <StyledNav>
          <StyledLink to="cast">Cast</StyledLink>
          <StyledLink to="reviews">Reviews</StyledLink>
        </StyledNav>{' '}
        <Outlet />
      </div>
    </div>
  );
};
export default MovieDetails;
