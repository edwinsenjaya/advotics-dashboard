import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import photoReducer from "./photos/reducer";
import favoriteReducer from "./favorite/reducer";
import logger from "../middlewares/logger";

const store = createStore(
  combineReducers({
    photo: photoReducer,
    favorite: favoriteReducer,
  }),
  applyMiddleware(logger, thunk)
);

export default store;
