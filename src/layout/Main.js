import Footer from "./Footer";
import Header from "./Header";
import PageBody from "./PageBody";
import SideBar from "./SideBar";

const Main = ({ userName, products, deleteProduct }) => {
  return (
    <div className="d-flex flex-column " style={{ minHeight: "100vh" }}>
      <Header />
      <div className="flex flex-grow-1">
        <SideBar />
        <PageBody
          userName={userName}
          products={products}
          deleteProduct={deleteProduct}
        />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
