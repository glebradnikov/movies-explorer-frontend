import { SearchForm } from '../SearchForm/SearchForm';
import { MoviesCardList } from '../MoviesCardList/MoviesCardList';
import movies from '../../utils/movies';

export const SavedMovies = () => {
  return (
    <main className="saved-movies">
      <SearchForm />
      <MoviesCardList movies={movies} />
    </main>
  );
};
