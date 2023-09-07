import { Link, useLocation, useSearchParams } from 'react-router-dom';
import { GrSearch } from 'react-icons/gr';
import { useEffect, useState } from 'react';
import { getResponse } from 'components/Api';

export const Movies = () => {
  const [querys, setQuerys] = useState('');
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [serchParams, setSerchParams] = useSearchParams();
  const options = {
    method: 'GET',
    url: 'https://api.themoviedb.org/3/search/movie',
    params: {
      query: `${querys}`,
      include_adult: 'false',
      language: 'en-US',
      page: '1',
    },
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2JhMDA3OWZmYzBmOTE1Y2E0NGZhZjA5NDY5OWE0MiIsInN1YiI6IjY0ZjRjYjc1OWU0NTg2MDExZGU2YjI5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7tXOVTtl4laXPE3MmR9v9s2frF2ianV7tipkyHirJNw',
    },
  };

  const changeQuery = newQuery => {
    setQuerys(`${newQuery}`);
    setFilms([]);
  };
  const onSubmit = evt => {
    evt.preventDefault();
    changeQuery(evt.target.elements.query.value);

    evt.target.reset();
  };
  useEffect(() => {
    if (!serchParams) return;

    setQuerys(serchParams.get('query'));
    console.log(serchParams.get('query'));
  }, [serchParams]);
  useEffect(() => {
    if (!querys) return;

    getResponse(options)
      .then(responce => {
        setFilms(responce.data.results);
        setSerchParams({ query: `${querys}` });

        console.log(responce);
      })
      .catch();
  }, [querys]);
  return (
    <>
      <div>
        <form
          onSubmit={evt => {
            onSubmit(evt);
          }}
        >
          <input type="text" name="query" placeholder="Search films " />
          <button type="submit">
            <span>
              <GrSearch />
            </span>
          </button>
        </form>
        <ul>
          {films
            .filter(film => film.title)
            .map(film => (
              <li key={film.id}>
                <Link to={`/movies/${film.id}`} state={{ from: location }}>
                  {film.title}
                </Link>
              </li>
            ))}
        </ul>
      </div>
    </>
  );
};
