import { useContext } from "react";
import UserContext from "../context/user/UserContext";
import YouTube from "react-youtube";

const Trailer = () => {
  const userContext = useContext(UserContext);
  const dataTrailer = userContext.selectedMovie;

  return (
    <>
      {dataTrailer && (
        <div className="trailer modal">
          <YouTube
            className="trailer__video"
            videoId={dataTrailer.key}
            opts={{
              width: "100%",
              height: "100%",
              playerVars: {
                autoplay: 1,
                controls: 1,
                cc_load_policy: 0,
                fs: 0,
                iv_load_policy: 0,
                modestbranding: 0,
                rel: 0,
                showinfo: 0,
              },
            }}
          />
          <button
            className="modal__btn"
            onClick={() => userContext.callTrailer()}
          >
            Close
          </button>
        </div>
      )}
      {!dataTrailer && userContext.notTrailer ? (
        <div className="modal">
          <div className="dataSheet__scheme">
            <h3>
              The trailer for this movie is not available, try another one.
              Sorry for the inconvenience :c
            </h3>
          </div>
          <button
            className="modal__btn"
            onClick={() => userContext.callTrailer()}
          >
            Close
          </button>
        </div>
      ) : null}
    </>
  );
};

export default Trailer;
