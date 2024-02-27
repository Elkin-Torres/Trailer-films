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
            <h4> {info.overview} </h4>
            <h4> Genre: {info.genres[0].name} </h4>
            <h4> Premiere: {info.release_date} </h4>
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
