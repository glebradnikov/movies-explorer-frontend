import { FilterCheckbox } from '../FilterCheckbox/FilterCheckbox';

export const SearchForm = () => {
  return (
    <form className="search-form">
      <fieldset className="search-form__fieldset">
        <input className="search-form__input" type="text" placeholder="Фильм" />
        <button className="search-form__button" type="submit" />
      </fieldset>
      <FilterCheckbox />
    </form>
  );
};
