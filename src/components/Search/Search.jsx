import React, { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { fetchSearch } from 'api/api';
import css from './SearchStyles.module.css';

const Search = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query') ?? '';

  const [moviesSearch, setMoviesSearch] = useState([]);

  useEffect(() => {
    const fetchSearchMovies = async () => {
      try {
        const search = await fetchSearch(query);
        setMoviesSearch(search.data.results);
        console.log(search.data.results);
      } catch (error) {
        console.log('Error');
      }
    };
    fetchSearchMovies();
  }, [query]);

 const handleSubmit = (event) => {
    event.preventDefault()
    const {value} = event.target.search
    setSearchParams(value)

  }

  const updateQueryString = ({target: {value}}) => {
    const params = value !== '' ? {query: value} : {};
    setSearchParams(params)

    if (value === '') {
      return setSearchParams({});
    }
    // // setSearchParams({ query: event.target.value });
    // setSearchParams({ query:event.target.value});
  };

 

  return (
<>
<form className={css.input} onSubmit={handleSubmit}>
      <input
        
        type="text"
        value={searchParams.get('query') ?? ''}
        onChange={updateQueryString}
        autoComplete="off"
        autoFocus
        placeholder="Search movie"
      />
      <button type='submit'>Search</button>
</form>


      <ul className={css.list}>
        {moviesSearch.map(({ id, title }) => {
          return (
            <li key={id} className={css.item}>
              <Link>{title}</Link>
            </li>
          );
        })}
      </ul>
</>
  );
};

export default Search;
