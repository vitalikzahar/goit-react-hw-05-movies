import { getResponse } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  const params = `movie/${movieId}/credits`;
  useEffect(() => {
    getResponse(params)
      .then(response => {
        setCasts(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            {' '}
            <img
              src={`https://image.tmdb.org/t/p/original/${cast.profile_path}`}
              height={200}
              alt=""
            />
            <h2>{cast.name}</h2>
            <h3>Character: {cast.character}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
