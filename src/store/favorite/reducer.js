import { ADD_FAV, ERROR_MESSAGE } from "./actionType";

const initialState = {
  dataFav: [],
  errorMessage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case ADD_FAV:
      return {
        ...state,
        dataFav: [...state.dataFav, action.payload],
      };
    case ERROR_MESSAGE:
      return {
        ...state,
        errorMessage: action.payload,
      };
    default:
      return state;
  }
}

export default reducer;
