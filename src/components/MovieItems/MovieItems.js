import { Link, useLocation } from 'react-router-dom';

export const MovieItems = ({ cardId, cardTitle }) => {
  const location = useLocation();
  return (
    <li>
      <Link to={`/movies/${cardId}`} state={{ from: location }}>
        {cardTitle}
      </Link>
    </li>
  );
};
