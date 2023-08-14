import LoginFormYup from "../components/LoginFormYup";
import PageDefault from "./PageDefault";

const MainPage = () => {
  return (
    <PageDefault pageTitle={"Ana Sayfa"}>
      <p>Sayfama hoış geldiniz...</p>
      <LoginFormYup />
    </PageDefault>
  );
};

export default MainPage;
