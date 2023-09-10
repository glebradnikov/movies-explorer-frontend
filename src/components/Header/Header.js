import { Link } from 'react-router-dom';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

export const Header = (props) => {
  return (
    <header className="header">
      <Link className="header__link" to="/" target="_blank">
        <img
          className="header__image"
          src={logo}
          alt="Логотип Movie Explorer"
        />
      </Link>
      <Navigation
        loggedIn={props.loggedIn}
        openMenu={props.openMenu}
        setOpenMenu={props.setOpenMenu}
        handleOpenMenu={props.handleOpenMenu}
      />
      {props.loggedIn && (
        <>
          <button
            className={`header__button ${
              props.openMenu && 'header__button_type_close'
            }`}
            onClick={props.handleOpenMenu}
          >
            <span className="header__span" />
          </button>
          <div
            className={`header__overlay ${
              props.openMenu && 'header__overlay_type_active'
            }`}
          />
        </>
      )}
    </header>
  );
};
