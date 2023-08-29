import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";
import { Button } from "reactstrap";
import { useDispatch } from "react-redux";
import { productsActions } from "./store/actions/productsActions";

import Main from "./layout/Main";
import { loadProducts } from "./utils/api";

// Root Component
function App() {
  const dispatch = useDispatch();

  const setProducts = (arr) =>
    dispatch({ type: productsActions.set, payload: arr });

  const user = {
    name: "ali",
    age: 19,
    email: "ali@veli.com",
  };

  const { name } = user;

  // component did mount
  useEffect(() => {
    loadProducts().then((res) => setProducts(res.data));
  }, []);

  return (
    <BrowserRouter>
      <Main userName={name} />
    </BrowserRouter>
  );
}

export default App;
