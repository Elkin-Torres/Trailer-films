//import PropTypes from "prop-types";

import { useContext } from "react";
import UserContext from "../context/user/UserContext";

const SearchMovies = () => {
  const userContext = useContext(UserContext);

  const searchMovie = (e) => {
    e.preventDefault();
    userContext.callMovies(userContext.movies);
  };

  return (
    <div className="search">
      <h1>Your movie trailer website!</h1>
      <form onSubmit={searchMovie} className="search__form">
        <input
          placeholder="escribe una película..."
          onChange={(e) => (userContext.movies = e.target.value)}
          className="search__input"
        />
        <button type="submit" className="search__btn">
          buscar
        </button>
      </form>
    </div>
  );
};

export default SearchMovies;
