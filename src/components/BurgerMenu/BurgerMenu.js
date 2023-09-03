import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export const BurgerMenu = () => {
  const [burgerMenuOpen, setBurgerMenuOpen] = useState(false);

  const { pathname } = useLocation();

  const handleBurgerMenu = () => {
    const body = document.body.style;

    setBurgerMenuOpen(!burgerMenuOpen);

    if (!burgerMenuOpen) {
      body.overflow = 'hidden';
    } else {
      body.overflow = 'auto';
    }
  };

  return (
    <div className="burger-menu">
      <button
        className={`burger-menu__button ${
          burgerMenuOpen ? 'burger-menu__button_type_close' : ''
        }`}
        onClick={() => {
          handleBurgerMenu();
        }}
      >
        <span></span>
      </button>
      <div
        className={`burger-menu__overlay ${
          burgerMenuOpen && 'burger-menu__overlay_type_active'
        }`}
      >
        <nav className="burger-menu__nav">
          <ul className="burger-menu__list">
            <ul className="burger-menu__list">
              <li className="burger-menu__item">
                <Link
                  className={`burger-menu__link ${
                    pathname === '/' && 'burger-menu__link_type_acitve'
                  }`}
                  to="/"
                  onClick={() => {
                    handleBurgerMenu();
                  }}
                >
                  Главная
                </Link>
              </li>
              <li className="burger-menu__item">
                <Link
                  className={`burger-menu__link ${
                    pathname === '/movies' && 'burger-menu__link_type_acitve'
                  }`}
                  to="/movies"
                  onClick={() => {
                    handleBurgerMenu();
                  }}
                >
                  Фильмы
                </Link>
              </li>
              <li className="burger-menu__item">
                <Link
                  className={`burger-menu__link ${
                    pathname === '/saved-movies' &&
                    'burger-menu__link_type_acitve'
                  }`}
                  to="/saved-movies"
                  onClick={() => {
                    handleBurgerMenu();
                  }}
                >
                  Сохранённые фильмы
                </Link>
              </li>
            </ul>
            <li className="burger-menu__item">
              <Link
                className="burger-menu__link burger-menu__link_type_profile"
                to="/profile"
                onClick={() => {
                  handleBurgerMenu();
                }}
              >
                Аккаунт
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};
