import { useState } from "react";
import Greeting from "../components/Greeting";
import { Button } from "reactstrap";
import { useInput } from "../hooks/useInput";

const Header = () => {
  // const isim = localStorage.getItem("name") || "Anonim";
  // const [userName, setUserName] = useState(isim);

  const [userName, setUserName] = useState(
    () => localStorage.getItem("name") || "Anonim"
  );

  const [name, nameHandler] = useInput("");
  const [surname, surnameHandler] = useInput("");

  const userNameUpdate = () => {
    setUserName(name);
    localStorage.setItem("name", name);
  };

  return (
    <header className="header p-3">
      <div>
        <label>
          Name:
          <input type="text" onChange={nameHandler} />
        </label>
        <label>
          Surname:
          <input type="text" onChange={surnameHandler} />
        </label>
        <Button onClick={userNameUpdate}>Kaydet</Button>
      </div>
      <Greeting userName={userName} surname={surname} />
    </header>
  );
};

export default Header;
