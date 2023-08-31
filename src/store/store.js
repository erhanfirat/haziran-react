// eski versiyonlar için -> import { createStore } from 'redux';
import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/";
import thunk from "redux-thunk";

export const store = createStore(reducers, applyMiddleware(thunk));
