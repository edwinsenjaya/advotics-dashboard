import { GET_DATA, ERROR_MESSAGE, GET_DETAIL } from "./actionType";

const initialState = {
  dataPhotos: [],
  dataDetail: null,
  errorMessage: "",
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_DATA:
      return {
        ...state,
        dataPhotos: action.payload,
      };
    case GET_DETAIL:
      return {
        ...state,
        dataDetail: action.payload,
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
