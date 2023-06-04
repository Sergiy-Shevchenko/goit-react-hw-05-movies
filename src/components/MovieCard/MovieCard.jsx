import { fetchDetails } from 'api/api';
import React, { useRef } from 'react';
import { Link, useParams, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, Suspense } from 'react';
import css from './MovieCard.module.css';

const MovieDetailsCard = () => {
  const locacation = useLocation();
  const backLink = useRef(locacation.state?.from ?? '/');
  // console.log(locacation);

  const { movieId } = useParams();
  const [movieDetails, setMovieDetails] = useState({});

  useEffect(() => {
    const fetchMovieDetails = async id => {
      try {
        const details = await fetchDetails(id);
        setMovieDetails(details.data);
        // console.log(details.data);
      } catch (error) {
        console.log('Error');
      }
    };
    fetchMovieDetails(movieId);
  }, [movieId]);
  
  const { poster_path, title, popularity, overview, genres } = movieDetails;
  
  if(popularity !== undefined || genres !==undefined) {
return (
    <div className={css.container}>
      <Link className={css.button} to={backLink.current}>
        Go back
      </Link>
      <section className={css.section__poster}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          alt={title}
          width={280}
        />
        <div className={css.description}>
          <h1>{title}</h1>
          <p>User Srtore: {popularity
          .toFixed()
          }</p>
          <h3>Overview</h3>
          <p>{overview}</p>
          <h3>Genres</h3>
          <ul className={css.list}>
            {genres.map(({ id, name }) => (
              <li key={id} className={css.item}>
                {name} 
              </li>
            ))}  
          </ul>
        </div>
      </section>
      <section className={css.section__link}>
        <p>Additoonal information</p>
        <ul>
          <li className={css.list__link}>
            <Link to={`cast`} className={css.link}>
              Cast
            </Link>
          </li>
          <li className={css.list__link}>
            <Link to={'reviews'} className={css.link}>
              Reviews
            </Link>
          </li>
        </ul>
        <Suspense>
          <Outlet />
        </Suspense>
      </section>
    </div>
  );
            }
};

export default MovieDetailsCard;
