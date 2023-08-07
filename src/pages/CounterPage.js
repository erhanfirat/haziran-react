import { useState } from "react";
import Counter from "../components/Counter";
import Title from "../components/styledComponents/Title";

const CounterPage = () => {
  const [userName, setUserName] = useState("Ali");
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <h1>Sayaç Sayfası</h1>
      <hr />
      user name: {userName}
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
      {showCounter && <Counter userName={userName} />}
    </div>
  );
};

export default CounterPage;
