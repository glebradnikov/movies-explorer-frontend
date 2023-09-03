import { useState } from 'react';

export const Profile = () => {
  const [editProfile, setEditPorfile] = useState(false);

  const handleEditProfile = () => {
    setEditPorfile(!editProfile);
  };

  return (
    <main className="main">
      <section className="profile">
        <form className="profile__form">
          <legend className="profile__legend">Привет, Виталий!</legend>
          <fieldset className="profile__fieldset">
            <label className="profile__label">
              Имя
              <input className="profile__input" placeholder="Имя" />
            </label>
            <label className="profile__label">
              E-mail
              <input className="profile__input" placeholder="E-mail" />
            </label>
          </fieldset>
          <div className="profile__buttons">
            <button className="profile__button" onClick={handleEditProfile}>
              Редактировать
            </button>
            <button className="profile__button profile__button_type_signout">
              Выйти из аккаунта
            </button>
          </div>
        </form>
      </section>
    </main>
  );
};
