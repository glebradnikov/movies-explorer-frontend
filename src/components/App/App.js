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
  const { pathname } = useLocation();

  return (
    <div className="app">
      {(pathname === '/' ||
        pathname === '/movies' ||
        pathname === '/saved-movies' ||
        pathname === '/profile') && <Header />}
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
