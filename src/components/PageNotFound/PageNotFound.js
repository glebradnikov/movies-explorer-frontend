import { Link, useNavigate } from 'react-router-dom';

export const PageNotFound = () => {
  const navigate = useNavigate();

  const goBack = () => {
    navigate(-1);
  };

  return (
    <section className="page-not-found">
      <h1 className="page-not-found__title">404</h1>
      <p className="page-not-found__text">Страница не найдена</p>
      <Link className="page-not-found__link" onClick={goBack}>
        Назад
      </Link>
    </section>
  );
};
