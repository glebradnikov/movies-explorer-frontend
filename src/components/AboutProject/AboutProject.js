export const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__header">О&nbsp;проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__title">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__title">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <div className="about-project__container">
        <div className="about-project__bar about-project__bar_type_backend">
          <h4 className="about-project__bar-title about-project__bar-title_type_backend">
            1&nbsp;неделя
          </h4>
          <p className="about-project__bar-text">Back-end</p>
        </div>
        <div className="about-project__bar">
          <h4 className="about-project__bar-title">4&nbsp;недели</h4>
          <p className="about-project__bar-text">Front-end</p>
        </div>
      </div>
    </section>
  );
};
