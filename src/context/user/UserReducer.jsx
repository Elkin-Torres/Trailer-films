import { CALL_MOVIES, SEARCH_DATA, HIDE_DATA } from "../types";


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
      }
    default:
      return state;
  }
};

export default UserReducer;
