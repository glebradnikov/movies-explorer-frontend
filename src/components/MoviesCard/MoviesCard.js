import { useState } from 'react';
import { useLocation } from 'react-router-dom';

export const MoviesCard = (props) => {
  const { pathname } = useLocation();

  const [savedMovie, setSavedMovie] = useState(false);

  const handleSaveClick = () => {
    setSavedMovie((event) => !event);
  };

  return (
    <li className="movies-card" key={props._id}>
      <img
        className="movies-card__image"
        src={props.image}
        alt="33 слова о дизайне"
      />
      <div className="movies-card__container">
        <h3 className="movies-card__title">{props.title}</h3>
        <p className="movies-card__text">{props.text}</p>
      </div>
      {pathname === '/movies' && (
        <button
          className={`movies-card__button ${
            !savedMovie
              ? 'movies-card__button_type_save'
              : 'movies-card__button_type_saved'
          }`}
          onClick={handleSaveClick}
        >
          {!savedMovie && 'Сохранить'}
        </button>
      )}
      {pathname === '/saved-movies' && (
        <button className="movies-card__button movies-card__button_type_delete" />
      )}
    </li>
  );
};
