import { CALL_MOVIES, SEARCH_DATA, HIDE_DATA, DATA_SHEET, DATA_SHEET_CLOSE, ERROR } from "../types";


const UserReducer = (state, action) => {
  const { payload, type } = action;

  switch (type) {
    case CALL_MOVIES:
      return {
        ...state,
        movies: payload
      };
    case SEARCH_DATA:
      return{
        ...state,
        selectedMovie:payload
      }
    case HIDE_DATA:
      return{
        ...state,
        selectedMovie:null
      };
    case DATA_SHEET:
      return{
        ...state,
        dataMovie:payload
      }
    case DATA_SHEET_CLOSE:
      return{
        ...state,
        dataMovie: null
      }
    case ERROR:
      return{
        ...state,
        error: payload
      }
    default:
      return state;
  }
};

export default UserReducer;
