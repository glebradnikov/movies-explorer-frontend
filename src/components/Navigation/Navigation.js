import { Link, useLocation } from 'react-router-dom';

export const Navigation = (props) => {
  const { pathname } = useLocation();

  return (
    <>
      {!props.loggedIn ? (
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link
                className="navigation__link navigation__link_type_landing"
                to="/signup"
              >
                Регистрация
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className="navigation__link navigation__link_type_signin"
                to="/signin"
              >
                Войти
              </Link>
            </li>
          </ul>
        </nav>
      ) : (
        <nav
          className={`navigation navigation_type_auth ${
            props.openMenu && 'navigation__type_active'
          }`}
        >
          <ul className="navigation__list navigation__list_type_auth">
            <li className="navigation__item navigation__item_type_auth">
              <Link
                className={`navigation__link navigation__link_type_auth ${
                  pathname === '/' && 'navigation__link_type_active'
                }`}
                to="/"
                onClick={() => props.setOpenMenu(false)}
              >
                Главная
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className={`navigation__link navigation__link_type_auth ${
                  pathname === '/movies' && 'navigation__link_type_active'
                }`}
                to="/movies"
                onClick={() => props.setOpenMenu(false)}
              >
                Фильмы
              </Link>
            </li>
            <li className="navigation__item">
              <Link
                className={`navigation__link navigation__link_type_auth ${
                  pathname === '/saved-movies' && 'navigation__link_type_active'
                }`}
                to="/saved-movies"
                onClick={() => props.setOpenMenu(false)}
              >
                Сохранённые фильмы
              </Link>
            </li>
          </ul>
          <Link
            className="navigation__link navigation__link_type_profile"
            to="/profile"
            onClick={() => props.setOpenMenu(false)}
          >
            Аккаунт
          </Link>
        </nav>
      )}
    </>
  );
};
