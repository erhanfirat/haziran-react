import { combineReducers } from "redux";
import { titleReducer } from "./titleReducer";
import { productsReducer } from "./productsReducer";
import { globalReducer } from "./globalReducer";

export const reducers = combineReducers({
  title: titleReducer,
  products: productsReducer,
  global: globalReducer,
});
