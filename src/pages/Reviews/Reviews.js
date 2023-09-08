import { getResponse } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  const params = `movie/${movieId}/reviews`;
  useEffect(() => {
    getResponse(params)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, []);

  return (
    <ul>
      {reviews.map(review => (
        <li key={review.id}>
          <h3>Author: {review.author}</h3>
          <p>{review.content}</p>
        </li>
      )) && <p>We don't have any reviews for this movie</p>}
    </ul>
  );
};
export default Reviews;
