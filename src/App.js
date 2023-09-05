import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./layout/Main";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { axiosWithAuth } from "./api/api";

// Root Component
function App() {
  const user = {
    name: "ali",
    age: 19,
    email: "ali@veli.com",
  };

  const { name } = user;

  // component did mount
  useEffect(() => {
    const token = localStorage.getItem("token");

    token &&
      axiosWithAuth()
        .post("checkUser", { token })
        .then((res) => {
          if (res.data) {
            // her şey yolunda
            // user logged in durumda
            // devam edebilir
            // cahange token olabilir
          }
        })
        .catch((err) => {
          localStorage.removeItem("token");
        });
  }, []);

  return (
    <BrowserRouter>
      <Main userName={name} />
      <ToastContainer />
    </BrowserRouter>
  );
}

export default App;
