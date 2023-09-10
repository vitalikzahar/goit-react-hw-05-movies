import { useEffect, useState } from 'react';
import { getResponse } from '../../components/Api';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [answers, setAnswers] = useState([]);

  useEffect(() => {
    getResponse(`trending/all/day`)
      .then(response => {
        setAnswers(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <MovieList cards={answers} />
    </div>
  );
};
export default Home;
