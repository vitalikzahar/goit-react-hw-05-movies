import { useEffect, useState } from 'react';
import { getResponse } from '../../components/Api';
import { useLocation } from 'react-router-dom';
import { MovieItems } from 'components/MovieItems/MovieItems';

const Home = () => {
  const params = `trending/all/day`;
  const [answers, setAnswers] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getResponse(params)
      .then(response => {
        setAnswers(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);
  return (
    <div>
      <ul>
        {answers
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
  );
};
export default Home;
