export const NavTab = () => {
  return (
    <nav className="nav-tab">
      <ul className="nav-tab__list">
        <li className="nav-tab__item">
          <a className="nav-tab__link" href="#about-project">
            О&nbsp;проекте
          </a>
        </li>
        <li className="nav-tab__item">
          <a className="nav-tab__link" href="#techs">
            Технологии
          </a>
        </li>
        <li className="nav-tab__item">
          <a className="nav-tab__link" href="#about-me">
            Студент
          </a>
        </li>
      </ul>
    </nav>
  );
};
