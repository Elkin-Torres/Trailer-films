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
      <h1>Title movies</h1>
      <form onSubmit={searchMovie} className="search__form">
        <input
          placeholder="escribe una película"
          onChange={(e) => (userContext.movies = e.target.value)}
        />
        <button type="submit">buscar</button>
      </form>
    </div>
  );
};

export default SearchMovies;
