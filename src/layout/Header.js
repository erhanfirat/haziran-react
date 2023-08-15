import { useState } from "react";
import Greeting from "../components/Greeting";
import { Button } from "reactstrap";

const Header = () => {
  const [userName, setUserName] = useState("Anonim");
  const [inputName, setInputName] = useState("");

  return (
    <header className="header p-3">
      <div>
        Sayfa Headerı
        <label>
          <input type="text" onChange={(e) => setInputName(e.target.value)} />
        </label>
        <Button onClick={() => setUserName(inputName)}>Kaydet</Button>
      </div>
      <Greeting userName={userName} />
    </header>
  );
};

export default Header;
