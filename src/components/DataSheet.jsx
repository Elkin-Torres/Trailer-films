import { useContext } from "react";
import UserContext from "../context/user/UserContext";

const DataSheet = () => {
  const userContext = useContext(UserContext);
  const info = userContext.dataMovie;

  return (
    <div>
      {userContext.dataMovie && (
        <div className="dataSheet modal">
          <div className="dataSheet__scheme">
            <h2> {info.title} </h2>
            <h4> {info.overview? info.overview:`There is no overview of the movie.`} </h4>
            { <h4> Genre: {info.genres.length? info.genres[0].name: `Genre of the film not specified`} </h4> }
            <h4> Premiere: {info.release_date? info.release_date:`There is no release date for the movie.`} </h4>
            <h4> Popularity: {info.vote_average} / 10 </h4>
            <h4> Total votes: {info.vote_count} </h4>
          </div>
          <button
            className="modal__btn"
            onClick={() => userContext.dataSheet()}
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DataSheet;
