import { Portfolio } from '../Portfolio/Portfolio';
import AboutMeImage from '../../images/about-me-image.jpg';

export const AboutMe = () => {
  return (
    <section className="about-me" id="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__wrapper">
          <h3 className="about-me__header">Виталий</h3>
          <p className="about-me__subtitle">
            Фронтенд-разработчик, 30&nbsp;лет
          </p>
          <p className="about-me__text">
            Я&nbsp;родился и&nbsp;живу в&nbsp;Саратове, закончил факультет
            экономики СГУ. У меня есть жена и&nbsp;дочь. Я&nbsp;люблю слушать
            музыку, а&nbsp;ещё увлекаюсь бегом. Недавно начал кодить.
            С&nbsp;2015 года работал в&nbsp;компании &laquo;СКБ Контур&raquo;.
            После того, как прошёл курс по&nbsp;веб-разработке, начал заниматься
            фриланс-заказами и&nbsp;ушёл с&nbsp;постоянной работы.
          </p>
          <a className="about-me__link" href="https://github.com/glebradnikov">
            Github
          </a>
        </div>
        <img
          className="about-me__image"
          src={AboutMeImage}
          alt="Фотография студента"
        />
      </div>
      <Portfolio />
    </section>
  );
};
