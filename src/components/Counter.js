import { useEffect, useState } from "react";
import CounterDisplay from "./CounterDisplay";

// TODO:
// * CounterWithoutState olarak kopyalayın
// * içindeki state leri local variable a çevirin
// * değişimler ekrana yansıtılıyor mu takip edin

const Counter = function ({ userName }) {
  // state prop local variable tanımlamaları
  const [sayac, setSayac] = useState(100);
  const [artisMiktari, setArtisMiktari] = useState(1);

  // method tanımları
  const arttir = () => {
    console.log(`setter öncesi sayac: ${sayac}`);
    setSayac(sayac + artisMiktari);
    console.log(`setter sonrası sayac: ${sayac}`);
  };

  const azalt = () => {
    setSayac(sayac - artisMiktari);
  };

  const sayacGuncelle = (newSayac) => setSayac(newSayac);

  const artisMiktariArttir = () => setArtisMiktari(artisMiktari + 1);
  const artisMiktariAzalt = () => setArtisMiktari(artisMiktari - 1);

  const count100eGeldi = () => {
    // bir şeyler
  };

  // console.log("Bu renderda sayac değeri: ", sayac);

  // useEffect tanımları

  useEffect(() => {
    // console.log("sayac veya userName değeri güncellendi: ", sayac, userName);
    // yeniden fiyat hesapla
  }, [sayac, userName]);

  useEffect(() => {
    console.log("sayac güncellendi ", sayac);

    if (sayac === 100) {
      count100eGeldi();
    }

    return () => {
      console.warn(`sayac değeri ${sayac} 'den değişmek üzere!`);
    };
  }, [sayac]);

  useEffect(() => {
    // ComponentDidMount
    console.warn(
      "[ComponentDidMount] Counter Componenti yüklendi, browser a monte edildi"
    );

    return () => {
      console.warn(
        "[ComponentWillUnmount] Counter Componenti kaldırıldı, browserdan silindi"
      );
    };
  }, []);

  useEffect(() => {
    // ComponentDidUpdate
    // console.warn(
    //   "[ComponentDidUpdate] Counter Componenti güncellendi, rerender edildi"
    // );
  });

  // template return JSX
  return (
    <>
      <CounterDisplay
        sayac={sayac}
        arttir={arttir}
        azalt={azalt}
        userName={userName}
        sayacGuncelle={sayacGuncelle}
      />
      Artış Mikltarı: {artisMiktari}
      <br />
      <button onClick={artisMiktariArttir}>Artış Miktarını Arttır</button>
      <button onClick={artisMiktariAzalt}>Artış Miktarını Azalt</button>
      <button onClick={count100eGeldi}>Count 100 e geldi</button>
    </>
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
