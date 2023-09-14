import { productsActions } from "../actions/productsActions";

export const FETCH_STATES = {
  notFetched: "NOT_FETCHED",
  fetching: "FETHCING",
  fetched: "FETCHED",
};

const productsStateInitial = {
  productsList: [],
  loading: false,
  fetchState: FETCH_STATES.notFetched,
};

export const productsReducer = (state = productsStateInitial, action) => {
  switch (action.type) {
    case productsActions.set:
      return { ...state, productsList: action.payload };

    case productsActions.clear:
      return productsStateInitial;

    case productsActions.setFetchState:
      return { ...state, fetchState: action.payload };

    case productsActions.add:
      if (action.payload && action.payload.id && action.payload.name)
        return {
          ...state,
          productsList: [...state.productsList, action.payload],
        };
      else {
        return state;
      }

    case productsActions.delete:
      return {
        ...state,
        productsList: state.productsList.filter(
          (pro) => pro.id !== action.payload
        ),
      };

    case productsActions.setLoading:
      return { ...state, loading: action.payload };

    default:
      return state;
  }
};
