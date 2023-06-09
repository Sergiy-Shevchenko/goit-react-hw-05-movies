import { fetchReviews } from 'api/api';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';

const Reviews = () => {
  const { movieId } = useParams();
  const [rev, setRev] = useState([]);

  useEffect(() => {
    const fetchReview = async id => {
      try {
        const rev = await fetchReviews(id);
        setRev(rev.data.results);
        // console.log(rev.data.results);
      } catch (error) {
        console.log('Error Reviews');
      }
    };
    fetchReview(movieId);
  }, [movieId]);

  return (
    <>
      {rev.length === 0 ? (
        <p>We don't have any reviews for this movie.</p>
      ) : (
        rev.map(({ id, author, content }) => (
          <li key={id}>
            <h3>Autor: {author}</h3>
            <p>{content}</p>
          </li>
        ))
      )}
    </>
  );
};
export default Reviews;
