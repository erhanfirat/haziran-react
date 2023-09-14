// eski versiyonlar için -> import { createStore } from 'redux';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/";
import thunk from "redux-thunk";
import { logAction } from "./middleware/logAction";

export const store = createStore(reducers, applyMiddleware(logAction, thunk));
