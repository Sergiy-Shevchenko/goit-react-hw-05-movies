import { fetchCredits } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Cast = () => {
  const { movieId } = useParams();
  const [castMovies, setCastMovies] = useState([]);

  useEffect(() => {
    const fetchCast = async id => {
      try {
        const cast = await fetchCredits(id);
        setCastMovies(cast.data.cast);
        console.log(cast.data.cast);
      } catch (error) {
        console.log('Error');
      }
    };
    fetchCast(movieId);
  }, [movieId]);


  return (
    <ul>
      {castMovies.map(({ id, profile_path, name, character }) => (
        <li key={id}>
          <img
            src={`https://image.tmdb.org/t/p/w500${profile_path}`}
            alt={name}
            width={180}
            height={250}
          />
          <h3>{name}</h3>
          <p>Character: {character}</p>
        </li>
      ))}
    </ul>
  );
};

export default Cast;
