import { useEffect, useState } from "react";
import PageDefault from "./PageDefault";
import LoginForm from "../components/LoginForm";
import { useDispatch } from "react-redux";
import { changeTitleAction } from "../store/actions/titleActions";

const MainPage = () => {
  const [newTitle, setNewTitle] = useState("");
  const dispatch = useDispatch();

  const changeReduxTitle = () => {
    dispatch(changeTitleAction(newTitle));
  };

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
      <p>Sayfama hoş geldiniz...</p>
      <input type="text" onChange={(e) => setNewTitle(e.target.value)} />
      <button onClick={changeReduxTitle}>Change Title</button>
      <p>Lorem ipsum </p>
    </PageDefault>
  );
};

export default MainPage;
