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
const defoultImg =
  'https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const MovieDetails = () => {
  const [card, setCard] = useState(null);
  const [genres, setGenres] = useState([]);
  const { movieId } = useParams();
  const location = useLocation();
  const goBack = useRef(location.state?.from ?? '/');

  useEffect(() => {
    getResponse(`movie/${movieId}`)
      .then(response => {
        setCard(response.data);
        setGenres(response.data.genres);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);
  if (!card) {
    return;
  }
  return (
    <div>
      <NavButton to={goBack.current}>Go back</NavButton>
      <FilmCard>
        <img
          src={
            card.poster_path
              ? `https://image.tmdb.org/t/p/original/${card.poster_path}`
              : defoultImg`https://image.tmdb.org/t/p/original/${card.poster_path}`
          }
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
