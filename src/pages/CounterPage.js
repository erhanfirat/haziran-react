import { useState } from "react";
import Counter from "../components/Counter";

const CounterPage = () => {
  const [userName, setUserName] = useState("Ali");
  const [showCounter, setShowCounter] = useState(true);

  return (
    <div>
      <h2>Sayaç Sayfası</h2>
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
