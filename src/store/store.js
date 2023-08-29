// eski versiyonlar için -> import { createStore } from 'redux';
import { legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers/";

export const store = createStore(reducers);
