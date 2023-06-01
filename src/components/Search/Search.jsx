import React, { useState, useEffect } from 'react';
import { Link, useSearchParams, useLocation } from 'react-router-dom';
import { fetchSearch } from 'api/api';
import css from './SearchStyles.module.css';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchMovieName, setSearchMovieName] = useState(
    () => searchParams.get('query') ?? ''
  );

  const [moviesSearch, setMoviesSearch] = useState([]);

  const locacation = useLocation();

  useEffect(() => {
    const fetchSearchMovies = async text => {
      try {
        const search = await fetchSearch(text);

        setMoviesSearch(search.data.results);
        console.log(search.data.results);
      } catch (error) {
        console.log('Error');
      }
    };
    if (searchMovieName) fetchSearchMovies(searchMovieName);
  }, [searchMovieName]);

  const handleSubmit = event => {
    event.preventDefault();
    const { value } = event.target.search;
    console.log(value);
    setSearchMovieName(value);
  };

  const updateQueryString = ({ target: { value } }) => {
    const param = value !== '' ? { query: value } : {};
    setSearchParams(param);

    if (value === '') {
      setSearchMovieName('');
    }
  };

  return (
    <>
      <form className={css.input} onSubmit={handleSubmit}>
        <input
          type="text"
          name="search"
          value={searchParams.get('query') ?? ''}
          onChange={updateQueryString}
          autoComplete="off"
          autoFocus
          placeholder="Search movie"
        />
        <button type="submit">Search</button>
      </form>

      <ul className={css.list}>
        {moviesSearch.map(({ id, title }) => {
          return (
            <li key={id} className={css.item}>
              <Link
                className={css.item}
                to={`/movies/${id}`}
                state={{ from: locacation }}
              >
                {title}
              </Link>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default Search;
