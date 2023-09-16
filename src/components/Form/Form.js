import { Link, useLocation } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const Form = (props) => {
  const { pathname } = useLocation();

  return (
    <section className="form">
      <Link className="form__image-link" to="/">
        <img className="form__image" src={logo} alt="Логотип Movie Explorer" />
      </Link>
      <h1 className="form__title">{props.title}</h1>
      <form className="form__form" name={props.name}>
        <fieldset
          className={`form__fieldset ${
            pathname === '/signin' && 'form__fieldset_type_login'
          }`}
        >
          {pathname === '/signup' && (
            <label className="form__label">
              Имя
              <input
                className="form__input"
                type="text"
                placeholder="Имя"
                required
              />
            </label>
          )}
          <label className="form__label">
            E-mail
            <input
              className="form__input"
              type="email"
              placeholder="E-mail"
              required
            />
          </label>
          <label className="form__label">
            Пароль
            <input
              className="form__input"
              type="password"
              placeholder="Пароль"
              required
            />
          </label>
        </fieldset>
        <button className="form__button" type="submit">
          {props.buttonText}
        </button>
        <p className="form__text">
          {props.text}
          <Link className="form__link" to={props.link}>
            {props.linkText}
          </Link>
        </p>
      </form>
    </section>
  );
};
