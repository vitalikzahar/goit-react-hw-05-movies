import { getResponse } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();
  const options = {
    method: 'GET',
    url: `https://api.themoviedb.org/3/movie/${movieId}/credits`,
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
        setCasts(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
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
