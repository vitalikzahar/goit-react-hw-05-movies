import { useEffect, useState } from 'react';
import { getResponse } from '../../components/Api';
import { useLocation } from 'react-router-dom';
import { MovieList } from 'components/MovieList/MovieList';

const Home = () => {
  const [answers, setAnswers] = useState([]);
  const location = useLocation();
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
      <MovieList cards={answers} state={{ from: location }} />
    </div>
  );
};
export default Home;
