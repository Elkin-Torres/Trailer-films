import { useEffect, useReducer } from "react";
import axios from "axios";
import UserReducer from "./UserReducer";
import {
  CALL_MOVIES,
  SEARCH_DATA,
  HIDE_DATA,
  DATA_SHEET,
  DATA_SHEET_CLOSE,
  ERROR,
} from "../types";
import UserContext from "./UserContext";
import PropTypes from "prop-types";

const UserState = (props) => {
  const initialState = {
    movies: [],
    requestMovie: null,
    selectedMovie: null,
    notTrailer: false,
    dataMovie: null,
    url: "https://api.themoviedb.org/3",
    img: "https://image.tmdb.org/t/p/original",
    trailer: false,
    error:
      "nothing was found with the registered information, try another title!",
    numberPages:[],
    actualPage: 1,
  };

  const [state, dispatch] = useReducer(UserReducer, initialState);

  //to get movie information
  const callMovies = async (request, number) => {
    try {
      const type = request ? "search" : "discover";
      const numberPage = number ? number : 1;

      const {
        data: { results, total_pages },
      } = await axios.get(`${initialState.url}/${type}/movie`, {
        params: {
          api_key: "563406ef7f84ace79673186b038d5435",
          query: request,
          page: numberPage,
        },
      });

      dispatch({
        type: CALL_MOVIES,
        payload: { results, total_pages, numberPage, request },
      });

    } catch (error) {
      if (error.response) {
        console.log(error);
        console.log(`Error: ${error.response.status}`);
        console.log(error.response.headers);
        dispatch({
          type: ERROR,
          payload: "something went wrong, try again later :(",
        });
      } else if (error.request) {
        console.log(error.request);
        dispatch({
          type: ERROR,
          payload: "something went wrong, try again later :(",
        });
      } else {
        console.log("Error", error.message);
        dispatch({
          type: ERROR,
          payload: "something went wrong, try again later :(",
        });
      }
    }
  };

  //function to obtain the trailer of the selected movie
  const callTrailer = async (id) => {
    try {
      if (id) {
        const {
          data: { results },
        } = await axios.get(`${initialState.url}/movie/${id}/videos`, {
          params: {
            api_key: "563406ef7f84ace79673186b038d5435",
          },
        });

        const setData = results.find(
          (movie) => movie.name === "Official Trailer"
        );

        dispatch({
          type: SEARCH_DATA,
          payload: setData ? setData : results[0],
        });
      } else {
        dispatch({ type: HIDE_DATA });
      }
    } catch (error) {
      console.log(error);
    }
  };

  //to obtain the technical sheet of the film
  const dataSheet = async (id) => {
    try {
      if (id) {
        const { data } = await axios.get(`${initialState.url}/movie/${id}`, {
          params: {
            api_key: "563406ef7f84ace79673186b038d5435",
          },
        });

        dispatch({ type: DATA_SHEET, payload: data });
      } else {
        dispatch({ type: DATA_SHEET_CLOSE });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    callMovies();
  }, []);

  return (
    <UserContext.Provider
      value={{
        movies: state.movies,
        requestMovie: state.requestMovie,
        selectedMovie: state.selectedMovie,
        url: state.url,
        img: state.img,
        trailer: state.trailer,
        dataMovie: state.dataMovie,
        error: state.error,
        numberPages: state.numberPages,
        actualPage: state.actualPage,
        notTrailer: state.notTrailer,
        callMovies,
        callTrailer,
        dataSheet,
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
