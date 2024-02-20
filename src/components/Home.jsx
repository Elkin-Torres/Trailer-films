import axios from "axios";
import { useEffect, useState } from "react";
import SearchMovies from "./SearchMovies";

const Home = () => {
  const URL = "https://api.themoviedb.org/3/",
    IMG = "https://image.tmdb.org/t/p/original";

  const [movies, setMovies] = useState([]);
  const [movie, setMovie] = useState();

  const callMovies = async (request) => {
    const type = request ? "search" : "discover";

    const {
      data: { results },
    } = await axios.get(`${URL}${type}/movie`, {
      params: {
        api_key: "563406ef7f84ace79673186b038d5435",
        query: request,
      },
    });

    console.log(results);

    setMovies(results);
    setMovie(results[0]);
  };

  const searchMovie = (e) => {
    e.preventDefault();
    callMovies(movies);
  };

  useEffect(() => {
    callMovies();
  }, []); 

  return (
    <>
      <h1>Title movies</h1>
      <SearchMovies onSubmit ={searchMovie} setMovies={setMovies} />
      {movie ? (
        <div className="bgMovie-container"
          style={{ backgroundImage: `url("${IMG}${movie.backdrop_path}")` }}
        ></div>
      ) : null}
    </>
  );
};

export default Home;
