import { useContext } from "react";
import { CounterContext } from "../context/CounterProvider";
import CounterDisplay from "./CounterDisplay";

const CounterWithContext = function () {
  const { counter, setCounter, artisMiktari, setArtisMiktari } =
    useContext(CounterContext);

  console.log("counterContext: ", counter, artisMiktari);

  return (
    <>
      <CounterDisplay
        sayac={counter}
        arttir={() => setCounter(counter + artisMiktari)}
        azalt={() => setCounter(counter - artisMiktari)}
        userName={"asd"}
        sayacGuncelle={(val) => setCounter(val)}
      />
      Artış Mikltarı: {artisMiktari}
      <br />
      <button onClick={() => setArtisMiktari(artisMiktari + 1)}>
        Artış Miktarını Arttır
      </button>
      <button onClick={() => setArtisMiktari(artisMiktari - 1)}>
        Artış Miktarını Azalt
      </button>
      <button onClick={() => {}}>Count 100 e geldi</button>
    </>
  );
};

export default CounterWithContext;
