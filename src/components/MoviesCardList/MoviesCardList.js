import { useLocation } from 'react-router-dom';
import { MoviesCard } from '../MoviesCard/MoviesCard';

export const MoviesCardList = (props) => {
  const { pathname } = useLocation();

  return (
    <section className="movies-card-list">
      <ul
        className={`movies-card-list__list ${
          pathname === '/saved-movies' &&
          'movies-card-list__list_type_saved-movies'
        }`}
      >
        {props.movies.map((movie, index) => (
          <MoviesCard
            movie={movie}
            key={movie._id}
            image={movie.image}
            title={movie.title}
            text={movie.text}
          />
        ))}
      </ul>
      {pathname === '/movies' && (
        <div className="movies-card-list__container">
          <button className="movies-card-list__button">Ещё</button>
        </div>
      )}
    </section>
  );
};
