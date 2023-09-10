import { useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { Header } from '../Header/Header';
import { Main } from '../Main/Main';
import { Movies } from '../Movies/Movies';
import { SavedMovies } from '../SavedMovies/SavedMovies';
import { Profile } from '../Profile/Profile';
import { Login } from '../Login/Login';
import { Register } from '../Register/Register';
import { PageNotFound } from '../PageNotFound/PageNotFound';
import { Footer } from '../Footer/Footer';

export const App = () => {
  const [loggedIn, setLoggedIn] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  const handleOpenMenu = () => {
    setOpenMenu(!openMenu);
  };

  const { pathname } = useLocation();

  return (
    <div className="app">
      {(pathname === '/' ||
        pathname === '/movies' ||
        pathname === '/saved-movies' ||
        pathname === '/profile') && (
        <Header
          loggedIn={loggedIn}
          openMenu={openMenu}
          setOpenMenu={setOpenMenu}
          handleOpenMenu={handleOpenMenu}
        />
      )}
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/movies" element={<Movies />} />
        <Route path="/saved-movies" element={<SavedMovies />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
      {(pathname === '/' ||
        pathname === '/movies' ||
        pathname === '/saved-movies') && <Footer />}
    </div>
  );
};
