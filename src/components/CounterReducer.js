import { useEffect, useReducer, useState } from "react";
import CounterDisplay from "./CounterDisplay";

// TODO:
// * CounterWithoutState olarak kopyalayın
// * içindeki state leri local variable a çevirin
// * değişimler ekrana yansıtılıyor mu takip edin

const sayacInitial = 100;

// JavaScript Object converted to immutable
const sayacActions = Object.freeze({
  increase: "INCREASE",
  decrease: "DECREASE",
  reset: "RESET",
  plus: "PLUS",
});

const sayacReducer = (state, action) => {
  switch (action.type) {
    case sayacActions.increase:
      return state < 200 ? state + 1 : state;

    case sayacActions.decrease:
      return state - 1;

    case sayacActions.reset:
      return sayacInitial;

    case sayacActions.plus:
      const art = Number(action.payload);

      return state + art <= 200 ? state + art : state;

    default:
      return state;
  }
};

const CounterReducer = function ({ userName }) {
  const [sayac, sayacDispatch] = useReducer(sayacReducer, sayacInitial);
  const [artis, setArtis] = useState(1);

  // method tanımları
  const arttir = () => {
    sayacDispatch({
      type: sayacActions.increase,
    });
  };

  const azalt = () => {
    sayacDispatch({
      type: sayacActions.decrease,
    });
  };

  const resetSayac = () => {
    sayacDispatch({ type: sayacActions.reset });
  };

  const topla = (val) => {
    sayacDispatch({
      type: sayacActions.plus,
      payload: val,
    });
  };

  // template return JSX
  return (
    <>
      <CounterDisplay
        sayac={sayac}
        arttir={arttir}
        azalt={azalt}
        userName={userName}
        resetSayac={resetSayac}
      />
      <input type="number" onChange={(e) => setArtis(e.target.value)} />
      <button onClick={() => topla(artis)}>Topla</button>
    </>
  );
};

export default CounterReducer;
