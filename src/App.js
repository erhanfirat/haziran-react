import { useEffect, useState } from "react";
import Counter, { PI } from "./components/Counter";
import CounterDisplay from "./components/CounterDisplay";
import Greeting from "./components/Greeting";
import Main from "./layout/Main";
import { BrowserRouter } from "react-router-dom";
import axios from "axios";

// console.log("PI ", PI);

// Root Component
function App() {
  const [products, setProducts] = useState([]);
  const divId = "app-container";

  const user = {
    name: "ali",
    age: 19,
    email: "ali@veli.com",
  };

  const { name } = user;

  // console.log(name);

  const logUser = () => {
    // console.log(user);
  };

  useEffect(() => {
    console.log("PRODUCTS UPDATED! ", products);
    // içeride setProducts kullanmamalıyız
  }, [products]);

  useEffect(() => {
    console.warn("TÜM UYGULAMA YÜKLENDİ!");
    axios
      .get("https://620d69fb20ac3a4eedc05e3a.mockapi.io/api/products")
      .then((res) => {
        setProducts(res.data);
      });
  }, []);

  return (
    <BrowserRouter>
      <Main userName={name} products={products}/>
    </BrowserRouter>
  );
}

export default App;
