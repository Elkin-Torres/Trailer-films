import { useContext } from "react";
import UserContext from "../context/user/UserContext";

const DataSheet = () => {
  const userContext = useContext(UserContext);

  return (
    <div>
      {userContext.selectedMovie && (
        <div className="dataSheet">
          <button
            className="dataSheet__close"
          >
            Close
          </button>
        </div>
      )}
    </div>
  );
};

export default DataSheet;
