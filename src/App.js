import { useEffect } from "react";
import Main from "./layout/Main";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { useReducer } from "react";
import { Button } from "reactstrap";

// console.log("PI ", PI);

const productsActions = Object.freeze({
  set: "SET_PRODUCTS",
  clear: "CLEAR_PRODUCTS",
  add: "ADD_PRODUCT",
  delete: "DELETE_PRODUCT",
});

const productsReducer = (state, action) => {
  switch (action.type) {
    case productsActions.set:
      return action.payload;

    case productsActions.clear:
      return [];

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

// Root Component
function App() {
  const [products, productsDispatch] = useReducer(productsReducer, []);

  const loadProducts = () => {
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  };

  const setProducts = (arr) =>
    productsDispatch({ type: productsActions.set, payload: arr });

  const clearProducts = () => productsDispatch({ type: productsActions.clear });

  const addProduct = (product) =>
    productsDispatch({ type: productsActions.add, payload: product });

  const deleteProduct = (productId) =>
    productsDispatch({ type: productsActions.delete, payload: productId });

  const user = {
    name: "ali",
    age: 19,
    email: "ali@veli.com",
  };

  const { name } = user;

  useEffect(() => {
    loadProducts();
  }, []);

  return (
    <BrowserRouter>
      <Button color="danger" onClick={() => clearProducts()}>
        Clear Products
      </Button>
      <Button color="primary" onClick={() => loadProducts()}>
        Load Products
      </Button>
      <Main userName={name} products={products} deleteProduct={deleteProduct} />
    </BrowserRouter>
  );
}

export default App;
