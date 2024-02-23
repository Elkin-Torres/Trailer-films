import { useContext } from "react";
import UserContext from "../context/user/UserContext";

const PrintMovies = () => {
  const userContext = useContext(UserContext);

  return (
    <div className="movie-cont">
      {userContext.movies.length ? (
        <div
          className="movie-cont__bgimg"
          style={{
            backgroundImage: `url("${userContext.img}${userContext.movies[0].backdrop_path}")`,
          }}
        >
          <div className="movie-cont__bginfo">
            <button className="movie-cont__btnTrailer">Play trailer</button>
            <h2> {userContext.movies[0].title} </h2>
            <div> {userContext.movies[0].overview} </div>
          </div>
        </div>
      ) : null}
      <div className="movie-cont__list">
        {userContext.movies.map((movie) => (
          <div key={movie.id} className="movie-cont__print">
            <picture>
              <img src={`${userContext.img + movie.poster_path}`} />
            </picture>
            <div className="movie-cont__options">
              <button className="movie-cont__data">Data sheet</button>
              <button className="movie-cont__trailer" onClick={()=> userContext.callTrailer(movie.id)}>Trailer</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PrintMovies;
