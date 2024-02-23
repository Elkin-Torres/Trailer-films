import { useEffect, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";
import { CALL_MOVIES, SEARCH_DATA, HIDE_DATA } from "../types";
import UserContext from "./UserContext";
import PropTypes from "prop-types";

const UserState = (props) => {
  const initialState = {
    movies: [],
    selectedMovie: null,
    url: "https://api.themoviedb.org/3",
    img: "https://image.tmdb.org/t/p/original",
    trailer: false,
  };

  const root = document.querySelector("#root");

  const [state, dispatch] = useReducer(UserReducer, initialState);

  const callMovies = async (request) => {
    const type = request ? "search" : "discover";

    //función para realizar la petición a la API
    const {
      data: { results },
    } = await axios.get(`${initialState.url}/${type}/movie`, {
      params: {
        api_key: "563406ef7f84ace79673186b038d5435",
        query: request,
      },
    });

    console.log(results);

    dispatch({ type: CALL_MOVIES, payload: results });
  };

  const callTrailer = async (data) => {
    if (data) {
      const {
        data: { results },
      } = await axios.get(`${initialState.url}/movie/${data}/videos`, {
        params: {
          api_key: "563406ef7f84ace79673186b038d5435",
        },
      });

      console.log(results);

      const setData = results.find(
        (movie) => movie.name === "Official Trailer"
      );

      console.log(setData);

      dispatch({ type: SEARCH_DATA, payload: setData ? setData : results });

      root.style.position = "absolute";
    } else {
      dispatch({ type: HIDE_DATA });
      root.style.position = "static";
    }
  };

  useEffect(() => {
    callMovies();
  }, []);

  return (
    <UserContext.Provider
      value={{
        movies: state.movies,
        selectedMovie: state.selectedMovie,
        url: state.url,
        img: state.img,
        trailer: state.trailer,
        callMovies,
        callTrailer,
      }}
    >
      {props.children}
    </UserContext.Provider>
  );
};

UserState.propTypes = {
  props: PropTypes.element,
  children: PropTypes.any,
};

export default UserState;
