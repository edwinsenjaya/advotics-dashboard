import { ADD_FAV, ERROR_MESSAGE } from "./actionType";

export function favoriteHandler(payload) {
  return async function (dispatch, getState) {
    const checkFav = getState().favorite.dataFav.find(
      (el) => el.id === payload.id
    );
    if (!checkFav) {
      dispatch(addFavorite(payload));
    } else dispatch(errorHandler("Photo already in your favorite"));
  };
}

export function addFavorite(payload) {
  const actionAddFav = {
    type: ADD_FAV,
    payload,
  };

  return actionAddFav;
}

export function errorHandler(payload) {
  const errorMessage = {
    type: ERROR_MESSAGE,
    payload,
  };

  return errorMessage;
}
