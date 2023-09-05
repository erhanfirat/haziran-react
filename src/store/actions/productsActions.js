import axios from "axios";
import { toast } from "react-toastify";
import { token } from "../../utils/util";
import { axiosWithAuth } from "../../api/api";

export const productsActions = Object.freeze({
  set: "SET_PRODUCTS",
  clear: "CLEAR_PRODUCTS",
  add: "ADD_PRODUCT",
  delete: "DELETE_PRODUCT",
  setLoading: "SET_PRODUCTS_LOADING",
});

export const loadProductsActionCreator = () => (dispatch) => {
  dispatch({ type: productsActions.setLoading, payload: true });
  setTimeout(() => {
    axiosWithAuth()
      .get("products", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        dispatch({ type: productsActions.set, payload: res.data });
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
      .delete(`products/123${productId}`)
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
