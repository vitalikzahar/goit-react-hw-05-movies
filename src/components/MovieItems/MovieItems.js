import { Link } from 'react-router-dom';

export const MovieItems = ({ cardId, cardTitle, state }) => {
  return (
    <li>
      <Link to={`/movies/${cardId}`} state={{ state }}>
        {cardTitle}
      </Link>
    </li>
  );
};
