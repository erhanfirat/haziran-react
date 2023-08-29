import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { productsReducer } from "./productsReducer";

export const reducers = combineReducers({
  title: titleReducer,
  products: productsReducer,
});
