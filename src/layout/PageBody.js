import { Switch, Route } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import WhoWeArePage from "../pages/WhoWeArePage";
import ProductsPage from "../pages/ProductsPage";

const PageBody = ({ userName, products }) => {
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
          <ProductsPage products={products} />
        </Route>
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};

export default PageBody;
