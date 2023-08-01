import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";
import SideBar from "./SideBar";

const Main = ({ userName }) => {
  return (
    <div>
      <Header />
      <div className="flex">
        <SideBar />
        <PageBody userName={userName} />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
