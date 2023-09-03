import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

export const Header = () => {
  return (
    <header className="header">
      <Link className="header__link" to="/">
        <img
          className="header__image"
          src={logo}
          alt="Логотип Movie Explorer"
        />
      </Link>
      <Navigation />
    </header>
  );
};
