import { Link, useLocation } from 'react-router-dom';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';

export const Navigation = () => {
  const { pathname } = useLocation();

  return (
    <>
      {pathname === '/' ? (
        <nav className="navigation">
          <ul className="navigation__list">
            <li className="navigation__item">
              <Link className="navigation__link" to="/signup">
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
        <>
          <nav className="navigation navigation_type_logged">
            <ul className="navigation__list navigation__list_type_logged">
              <li className="navigation__item">
                <Link
                  className={`navigation__link navigation__link_type_movies ${
                    pathname === '/movies' && 'navigation__link_type_active'
                  }`}
                  to="/movies"
                >
                  Фильмы
                </Link>
              </li>
              <li className="navigation__item">
                <Link
                  className={`navigation__link navigation__link_type_movies ${
                    pathname === '/saved-movies' &&
                    'navigation__link_type_active'
                  }`}
                  to="/saved-movies"
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <Link
              className="navigation__link navigation__link_type_profile"
              to="/profile"
            >
              Аккаунт
            </Link>
          </nav>
          <BurgerMenu />
        </>
      )}
    </>
  );
};
