import Greeting from "../components/Greeting";

const Header = () => {
  return (
    <header className="header p-3">
      <div>Sayfa Headerı</div>
      <Greeting />
    </header>
  );
};

export default Header;
