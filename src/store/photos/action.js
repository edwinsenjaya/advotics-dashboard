import { GET_DATA, ERROR_MESSAGE, GET_DETAIL } from "./actionType";

export function getData(payload) {
  const actionGetData = {
    type: GET_DATA,
    payload,
  };

  return actionGetData;
}

export function getDetail(payload) {
  const actiongetDetail = {
    type: GET_DETAIL,
    payload,
  };

  return actiongetDetail;
}

export function fetchData() {
  return async function (dispatch) {
    const url = `https://api.unsplash.com/photos/random/?orientation=squarish&count=24&content_filter=high&client_id=hnRC8vBZGAYq3bi2V8nhi3KjLI5oKjRWC04b0WZPVm4`;

    const res = await fetch(url);
    let data = await res.json();

    if (!data || data.errors) {
      dispatch(
        errorHandler("Something went wrong while trying to get the data 😟")
      );
    } else {
      dispatch(getData(data));
    }
  };
}

export function fetchSearch(query) {
  return async function (dispatch) {
    const url = `https://api.unsplash.com/photos/random/?query=${query}&orientation=squarish&count=24&content_filter=high&client_id=hnRC8vBZGAYq3bi2V8nhi3KjLI5oKjRWC04b0WZPVm4`;
    const res = await fetch(url);
    let data = await res.json();

    if (!data || data.errors) {
      dispatch(
        errorHandler("Something went wrong while trying to get the data 😟")
      );
    } else {
      dispatch(getData(data));
    }
  };
}

export function fetchPhoto(id) {
  return async function (dispatch) {
    const url = `https://api.unsplash.com/photos/${id}/?client_id=hnRC8vBZGAYq3bi2V8nhi3KjLI5oKjRWC04b0WZPVm4`;

    const res = await fetch(url);
    const data = await res.json();

    if (!data || data.errors) {
      dispatch(
        errorHandler("Something went wrong while trying to get the data 😟")
      );
    } else dispatch(getDetail(data));
  };
}

export function errorHandler(payload) {
  const errorMessage = {
    type: ERROR_MESSAGE,
    payload,
  };

  return errorMessage;
}
