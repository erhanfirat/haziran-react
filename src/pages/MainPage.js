import { useEffect } from "react";
import LoginFormYup from "../components/LoginFormYup";
import PageDefault from "./PageDefault";

const MainPage = () => {
  useEffect(() => {
    console.warn(
      "[ComponentDidMount] MainPage Componenti yüklendi, browser a monte edildi"
    );

    return () => {
      console.warn("[ComponentWillUnmount] MainPage Componenti silindi");
    };
  }, []);

  return (
    <PageDefault pageTitle={"Ana Sayfa"}>
      <p>Sayfama hoış geldiniz...</p>
      <LoginFormYup />
    </PageDefault>
  );
};

export default MainPage;
