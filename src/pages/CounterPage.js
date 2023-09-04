import { useState } from "react";
import PageDefault from "./PageDefault";
import CounterReducer from "../components/CounterReducer";
import CounterWithContext from "../components/CounterWithContext";

const CounterPage = () => {
  const [userName, setUserName] = useState("Ali");
  const [showCounter, setShowCounter] = useState(true);

  return (
    <PageDefault pageTitle="Sayaç Sayfası">
      <h3>user name: {userName}</h3>
      <button
        onClick={() => {
          setUserName(`Anonim${Math.round(Math.random() * 10000)}`);
        }}
      >
        Change User Name
      </button>
      <button
        onClick={() => {
          setShowCounter(!showCounter);
        }}
      >
        Show / Hide Counter
      </button>
      Conditional Rendering
      {showCounter && <CounterWithContext />}
    </PageDefault>
  );
};

export default CounterPage;
