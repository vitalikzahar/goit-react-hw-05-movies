import { useLocation, useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getResponse } from 'components/Api';
import { MovieItems } from 'components/MovieItems/MovieItems';
import { FormItem } from 'components/FormItem/FormItem';

const Movies = () => {
  const [querys, setQuerys] = useState('');
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [serchParams, setSerchParams] = useSearchParams();

  const params = `search/movie`;
  const changeQuery = newQuery => {
    setQuerys(`${newQuery}`);
    setFilms([]);
  };

  useEffect(() => {
    if (!serchParams) return;

    setQuerys(serchParams.get('query'));
  }, [serchParams]);
  useEffect(() => {
    if (!querys) return;

    getResponse(params, querys)
      .then(responce => {
        setFilms(responce.data.results);
        setSerchParams({ query: `${querys}` });
      })
      .catch();
  }, [querys, params, setSerchParams]);
  return (
    <>
      <div>
        <FormItem changeQuery={changeQuery} />
        <ul>
          {films
            .filter(card => card.title)
            .map(card => (
              <MovieItems
                key={card.id}
                cardId={card.id}
                cardTitle={card.title}
                state={{ from: location }}
              />
            ))}
        </ul>
      </div>
    </>
  );
};
export default Movies;
