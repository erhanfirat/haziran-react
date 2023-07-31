import { useState } from "react";

const Counter = function () {
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
    <div>
      <h3>Counter: {sayac}</h3>
      <button onClick={arttir}> + Arttır</button>
      <button onClick={azalt}> - Azalt</button>
    </div>
  );
};

export default Counter;

/**
 * "Bu renderda sayac değeri: " 100
 * setter öncesi sayac: 100
 * setter sonrası sayac: 100
 * "Bu renderda sayac değeri: ", 101
 */
