import { useEffect, useState } from 'react';
import { getResponse } from '../../components/Api';
import { Link, useLocation } from 'react-router-dom';
const options = {
  method: 'GET',
  url: 'https://api.themoviedb.org/3/trending/all/day',
  params: { language: 'en-US' },
  headers: {
    accept: 'application/json',
    Authorization:
      'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxN2JhMDA3OWZmYzBmOTE1Y2E0NGZhZjA5NDY5OWE0MiIsInN1YiI6IjY0ZjRjYjc1OWU0NTg2MDExZGU2YjI5NiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.7tXOVTtl4laXPE3MmR9v9s2frF2ianV7tipkyHirJNw',
  },
};
export const Home = () => {
  const [answers, setAnswers] = useState([]);
  const location = useLocation();
  useEffect(() => {
    getResponse(options)
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
          .filter(answ => answ.title)
          .map(answer => (
            <li key={answer.id}>
              <Link to={`/movies/${answer.id} `} state={{ from: location }}>
                {answer.title}
              </Link>
            </li>
          ))}
      </ul>
    </div>
  );
};
