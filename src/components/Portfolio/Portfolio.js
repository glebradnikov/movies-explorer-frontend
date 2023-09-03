export const Portfolio = () => {
  return (
    <section className="portfolio">
      <h3 className="portfolio__title">Портфолио</h3>
      <ul className="portfolio__list">
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/glebradnikov">
            Статичный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/glebradnikov">
            Адаптивный сайт
          </a>
        </li>
        <li className="portfolio__item">
          <a className="portfolio__link" href="https://github.com/glebradnikov">
            Одностраничное приложение
          </a>
        </li>
      </ul>
    </section>
  );
};
