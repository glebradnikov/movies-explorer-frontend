import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/movies';

export const Movies = () => {
  return (
    <main className="main">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  );
};
