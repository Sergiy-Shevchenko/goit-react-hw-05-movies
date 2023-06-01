import React from 'react';
import css from './PagesStyles.module.css';
import ListTrending from 'components/List/ListTrending';

const HomePage = () => {
  return (
    <>
      <div className={css.title}>Trending today</div>
      <ListTrending />
    </>
  );
};

export default HomePage;
