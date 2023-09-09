import { getResponse } from 'components/Api';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
const defoultImg =
  'https://images.pexels.com/photos/1252983/pexels-photo-1252983.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1';
const Cast = () => {
  const [casts, setCasts] = useState([]);
  const { movieId } = useParams();

  useEffect(() => {
    getResponse(`movie/${movieId}/credits`)
      .then(response => {
        setCasts(response.data.cast);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [movieId]);

  return (
    <>
      <ul>
        {casts.map(cast => (
          <li key={cast.id}>
            {' '}
            <img
              src={
                cast.profile_path
                  ? `https://image.tmdb.org/t/p/original/${cast.profile_path}`
                  : defoultImg
              }
              height={200}
              alt=""
            />
            <h2>{cast.name}</h2>
            <h3>Character: {cast.character}</h3>
          </li>
        ))}
      </ul>
    </>
  );
};
export default Cast;
