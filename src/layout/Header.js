import { useContext } from "react";
import Greeting from "../components/Greeting";
import { Button } from "reactstrap";
import { SiteGlobalContext } from "../context/SiteGlobal";
import { useDispatch, useSelector } from "react-redux";
import {
  globalActions,
  toggleLanguageActionCreator,
} from "../store/reducers/globalReducer";

const Header = () => {
  const { theme, makeLight, makeDark } = useContext(SiteGlobalContext);
  const language = useSelector((store) => store.global.language);
  const dispatch = useDispatch();

  const changeLang = () => {
    dispatch(toggleLanguageActionCreator(language));
  };

  return (
    <header className="header p-3">
      <Button onClick={() => (theme === "light" ? makeDark() : makeLight())}>
        Change Theme
      </Button>
      <Button onClick={changeLang}>Change Lang: {language}</Button>
      <Greeting />
    </header>
  );
};

export default Header;
