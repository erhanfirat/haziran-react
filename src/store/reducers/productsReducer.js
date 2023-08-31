import { productsActions } from "../actions/productsActions";

const productsStateInitial = {
  productsList: [],
  loading: false,
};

export const productsReducer = (state = productsStateInitial, action) => {
  switch (action.type) {
    case productsActions.set:
      return { ...state, productsList: action.payload };

    case productsActions.clear:
      return productsStateInitial;

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
