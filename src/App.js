import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./layout/Main";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

// Root Component
function App() {
  const user = {
    name: "ali",
    age: 19,
    email: "ali@veli.com",
  };

  const { name } = user;

  // component did mount
  useEffect(() => {}, []);

  return (
    <BrowserRouter>
      <Main userName={name} />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
