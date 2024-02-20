import PropTypes from "prop-types";

const SearchMovies = ({ onSubmit, setMovies }) => {
  return (
    <>
      <form onSubmit={onSubmit}>
        <input
          placeholder="escribe una película"
          onChange={(e) => setMovies(e.target.value)}
        />
        <button type="submit">buscar</button>
      </form>
    </>
  );
};

SearchMovies.propTypes = {
  setMovies: PropTypes.func,
  onSubmit: PropTypes.func
};

export default SearchMovies;
