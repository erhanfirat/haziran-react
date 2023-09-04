import { useContext } from "react";
import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";
import SideBar from "./SideBar";
import { SiteGlobalContext } from "../context/SiteGlobal";

const Main = ({ userName }) => {
  const { theme } = useContext(SiteGlobalContext);

  return (
    <div
      className={`d-flex flex-column ${theme}`}
      style={{ minHeight: "100vh" }}
      data-bs-theme={theme}
    >
      <Header />
      <div className="flex flex-grow-1">
        <SideBar />
        <PageBody userName={userName} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
