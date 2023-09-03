export const Footer = () => {
  return (
    <footer className="footer">
      <h2 className="footer__title">
        Учебный проект Яндекс.Практикум х&nbsp;BeatFilm.
      </h2>
      <div className="footer__container">
        <p className="footer__text">
          ©<span className="footer__span">&nbsp;</span>2020
        </p>
        <ul className="footer__list">
          <li className="footer__item">
            <a className="footer__link" href="https://practicum.yandex.ru">
              Яндекс.Практикум
            </a>
          </li>
          <li className="footer__item">
            <a className="footer__link" href="https://github.com/glebradnikov">
              Github
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
