import { useContext } from "react";
import Greeting from "../components/Greeting";
import { Button } from "reactstrap";
import { SiteGlobalContext } from "../context/SiteGlobal";

const Header = () => {
  const { theme, makeLight, makeDark } = useContext(SiteGlobalContext);

  return (
    <header className="header p-3">
      <Button onClick={() => (theme === "light" ? makeDark() : makeLight())}>
        Change Theme
      </Button>
      <Greeting />
    </header>
  );
};

export default Header;
