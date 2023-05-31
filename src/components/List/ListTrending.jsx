import React from 'react';
import { useState, useEffect } from 'react';
import {fetchMovies} from 'api/api';
import { Link } from 'react-router-dom';
import css from './ListLtending.module.css'

const ListTrending = () => {
  const [movieTrendList, setMovieTrendList] = useState([]);

  useEffect(() => {
    const fetchTrendMovies = async () => {
      try {
        const trending = await fetchMovies();
        setMovieTrendList(trending.data.results);
        console.log(trending.data.results);
      } catch (error) {
        console.log('Error');
      }
    };
    fetchTrendMovies();
  }, []);

  return (
    <ul className={css.list}>
      {movieTrendList.map(({ id, title, name }) => (
        <li key={id} className={css.item}>
          <Link>{title}{name}</Link>
        </li>
      ))}
    </ul>
  );
};

export default ListTrending;
