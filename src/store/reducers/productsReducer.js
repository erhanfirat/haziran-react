import { productsActions } from "../actions/productsActions";

const productsStateInitial = [];

export const productsReducer = (state = productsStateInitial, action) => {
  switch (action.type) {
    case productsActions.set:
      return action.payload;

    case productsActions.clear:
      return productsStateInitial;

    case productsActions.add:
      if (action.payload && action.payload.id && action.payload.name)
        return [...state, action.payload];
      else {
        return state;
      }

    case productsActions.delete:
      return state.filter((pro) => pro.id !== action.payload);

    default:
      return state;
  }
};
