import { NavLink } from 'react-router-dom';
import css from './HeaderStyles.module.css';

const Header = () => {
  return (
    <nav>
      <div className={css.Header}>
        <NavLink className={css.Link} to="/">
          Home
        </NavLink>
        <NavLink className={css.Link} to="/movies">
          Movies
        </NavLink>
      </div>
    </nav>
  );
};

export default Header;
