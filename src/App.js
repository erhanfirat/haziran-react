import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";

import Main from "./layout/Main";
import { ToastContainer } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import { axiosWithAuth } from "./api/api";
import { REQ_TYPES, useAxios } from "./hooks/useAxios";

// Root Component
function App() {
  const user = {
    name: "ali",
    age: 19,
    email: "ali@veli.com",
  };
  const token = localStorage.getItem("token");

  const { name } = user;

  const [checkUser, checkUserRes, checkUserLoading, checkUserErr] = useAxios({
    reqType: REQ_TYPES.POST,
    endpoint: "checkUser",
    payload: { token },
  });

  // component did mount
  useEffect(() => {
    token &&
      checkUser()
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
