import axios from "axios";
import { toast } from "react-toastify";
import { axiosWithAuth } from "../../api/api";
import { REQ_TYPES, useAxios } from "../../hooks/useAxios";
import { FETCH_STATES } from "../reducers/productsReducer";

export const productsActions = Object.freeze({
  set: "SET_PRODUCTS",
  clear: "CLEAR_PRODUCTS",
  add: "ADD_PRODUCT",
  delete: "DELETE_PRODUCT",
  setLoading: "SET_PRODUCTS_LOADING",
  setFetchState: "SET_FETCH_STATE",
});

export const loadProductsActionCreator = () => (dispatch, getState) => {
  dispatch({ type: productsActions.setLoading, payload: true });
  dispatch({
    type: productsActions.setFetchState,
    payload: FETCH_STATES.fetching,
  });

  setTimeout(() => {
    axiosWithAuth()
      .get("products")
      .then((res) => {
        dispatch({ type: productsActions.set, payload: res.data });
        dispatch({
          type: productsActions.setFetchState,
          payload: FETCH_STATES.fetched,
        });
      })
      .catch((err) => {
        toast.error(`HATA! ${err.message}`);
      })
      .finally(() => {
        dispatch({ type: productsActions.setLoading, payload: false });
      });
  }, 2000);
};

// axios.delete(`https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products/${productId}`);

export const deleteProductActionCreator = (productId) => (dispatch) => {
  productId &&
    axiosWithAuth()
      .delete(`products/${productId}`)
      .then((res) => {
        // iki seçenek
        // 1. reducer içinden sil
        // dispatch({ type: productsActions.delete, payload: productId });

        // 2. load products from zero
        dispatch(loadProductsActionCreator());
      })
      .catch((err) => {
        toast.error(`HATA! ${err.message}`);
      });
};
