export const AboutProject = () => {
  return (
    <section className="about-project" id="about-project">
      <h2 className="about-project__title">О&nbsp;проекте</h2>
      <ul className="about-project__list">
        <li className="about-project__item">
          <h3 className="about-project__header">
            Дипломный проект включал 5&nbsp;этапов
          </h3>
          <p className="about-project__text">
            Составление плана, работу над бэкендом, вёрстку, добавление
            функциональности и&nbsp;финальные доработки.
          </p>
        </li>
        <li className="about-project__item">
          <h3 className="about-project__header">
            На&nbsp;выполнение диплома ушло 5&nbsp;недель
          </h3>
          <p className="about-project__text">
            У&nbsp;каждого этапа был мягкий и&nbsp;жёсткий дедлайн, которые
            нужно было соблюдать, чтобы успешно защититься.
          </p>
        </li>
      </ul>

      <ul className="about-project__bar-list">
        <li className="about-project__bar-item about-project__bar-item_type_backend">
          <h4 className="about-project__bar-header about-project__bar-header_type_backend">
            1&nbsp;неделя
          </h4>
          <p className="about-project__bar-text">Back-end</p>
        </li>
        <li className="about-project__bar-item">
          <h4 className="about-project__bar-header">4&nbsp;недели</h4>
          <p className="about-project__bar-text">Front-end</p>
        </li>
      </ul>
    </section>
  );
};
