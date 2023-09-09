import { getResponse } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getResponse(`movie/${movieId}/reviews`)
      .then(response => {
        setReviews(response.data.results);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  return (
    <ul>
      {reviews.length > 0 ? (
        reviews.map(review => (
          <li key={review.id}>
            <h3>Ahor: {review.author}</h3>
            <p>{review.content}</p>
          </li>
        ))
      ) : (
        <li>We don't have any reviews for this movie</li>
      )}
    </ul>
  );
};
export default Reviews;
