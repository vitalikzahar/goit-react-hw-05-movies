import { useSearchParams } from 'react-router-dom';

import { useEffect, useState } from 'react';
import { getResponse } from 'components/Api';
import { FormItem } from 'components/FormItem/FormItem';
import { MovieList } from 'components/MovieList/MovieList';

const Movies = () => {
  const [films, setFilms] = useState([]);
  const [serchParams, setSerchParams] = useSearchParams();

  const changeQuery = newQuery => {
    setSerchParams({ query: `${newQuery}` });
    setFilms([]);
  };

  useEffect(() => {
    const query = serchParams.get('query');
    if (!query) return;

    getResponse(`search/movie`, query)
      .then(responce => {
        setFilms(responce.data.results);
      })
      .catch();
  }, [serchParams]);
  return (
    <>
      <div>
        <FormItem changeQuery={changeQuery} />
        <MovieList cards={films} />
      </div>
    </>
  );
};
export default Movies;
