import { useLocation, useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getResponse } from 'components/Api';
import { FormItem } from 'components/FormItem/FormItem';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [querys, setQuerys] = useState('');
  const [films, setFilms] = useState([]);
  const location = useLocation();
  const [serchParams, setSerchParams] = useSearchParams();

  const changeQuery = newQuery => {
    setQuerys(`${newQuery}`);
    setFilms([]);
  };

  useEffect(() => {
    setQuerys(serchParams.get('query'));
    if (!querys) return;

    getResponse(`search/movie`, querys)
      .then(responce => {
        setFilms(responce.data.results);
        setSerchParams({ query: `${querys}` });
      })
      .catch();
  }, [querys, serchParams, setSerchParams]);
  return (
    <>
      <div>
        <FormItem changeQuery={changeQuery} />
        <MovieList cards={films} state={{ from: location }} />
      </div>
    </>
  );
};
export default Movies;
