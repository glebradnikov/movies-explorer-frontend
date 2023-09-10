import { useState } from 'react';

export const Profile = () => {
  const [editProfile, setEditPorfile] = useState(false);

  const handleEditProfile = (event) => {
    event.preventDefault();

    setEditPorfile(!editProfile);
  };

  return (
    <main className="main">
      <section className="profile">
        <h1 className="profile__title">Привет, Виталий!</h1>
        <form className="profile__form">
          <fieldset className="profile__fieldset">
            <label className="profile__label">
              Имя
              <input
                className="profile__input"
                type="text"
                placeholder="Имя"
                required
              />
            </label>
            <label className="profile__label">
              E-mail
              <input
                className="profile__input"
                type="email"
                placeholder="E-mail"
                required
              />
            </label>
          </fieldset>
          <div className="profile__container">
            {!editProfile ? (
              <>
                <button
                  className="profile__button profile__button_type_edit"
                  type="submit"
                  onClick={handleEditProfile}
                >
                  Редактировать
                </button>
                <button
                  className="profile__button profile__button_type_signout"
                  type="submit"
                >
                  Выйти из аккаунта
                </button>
              </>
            ) : (
              <button
                className="profile__button profile__button_type_save"
                type="submit"
              >
                Сохранить
              </button>
            )}
          </div>
        </form>
      </section>
    </main>
  );
};
