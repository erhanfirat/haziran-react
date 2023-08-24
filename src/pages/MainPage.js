import { useEffect } from "react";
import PageDefault from "./PageDefault";
import LoginForm from "../components/LoginForm";

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
      <LoginForm />
    </PageDefault>
  );
};

export default MainPage;
