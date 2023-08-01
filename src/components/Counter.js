import { useState } from "react";
import CounterDisplay from "./CounterDisplay";

// TODO:
// * CounterWithoutState olarak kopyalayın
// * içindeki state leri local variable a çevirin
// * değişimler ekrana yansıtılıyor mu takip edin

const Counter = function ({ userName }) {
  const [sayac, setSayac] = useState(100);
  const [artisMiktari, setArtisMiktari] = useState(1);

  const arttir = () => {
    console.log(`setter öncesi sayac: ${sayac}`);
    setSayac(sayac + 1);
    console.log(`setter sonrası sayac: ${sayac}`);
  };

  const azalt = () => {
    setSayac(sayac - 1);
  };

  console.log("Bu renderda sayac değeri: ", sayac);

  return (
    <CounterDisplay
      sayac={sayac}
      arttir={arttir}
      azalt={azalt}
      userName={userName}
    />
  );
};

export default Counter;

export const PI = 3.1415;

/**
 * "Bu renderda sayac değeri: " 100
 * setter öncesi sayac: 100
 * setter sonrası sayac: 100
 * "Bu renderda sayac değeri: ", 101
 */
