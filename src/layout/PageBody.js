import { Switch, Route } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import WhoWeArePage from "../pages/WhoWeArePage";
import ProductsPage from "../pages/ProductsPage";
import ProductDetailPage from "../pages/ProductDetailPage";

const PageBody = ({ userName }) => {
  return (
    <div className="p-3 flex-grow-1">
      <Switch>
        <Route path="/counter" exact>
          <CounterPage userName={userName} />
        </Route>
        <Route path="/whoweare" exact>
          <WhoWeArePage />
        </Route>
        <Route path="/products" exact>
          <ProductsPage />
        </Route>
        <Route path="/products/:productId" exact>
          <ProductDetailPage />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
        <Route path="*">
          <div style={{ color: "red" }}>
            <h1>404 - Aradığınız sayfa bulunamadı!</h1>
          </div>
        </Route>
      </Switch>
    </div>
  );
};

export default PageBody;
