import { Link, useLocation } from 'react-router-dom';

export const MovieList = ({ cards }) => {
  const location = useLocation();
  return (
    <ul>
      {cards
        .filter(card => card.title)
        .map(card => (
          <li key={card.id}>
            <Link to={`/movies/${card.id}`} state={{ from: location }}>
              {card.title}
            </Link>
          </li>
        ))}
    </ul>
  );
};
