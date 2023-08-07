import { Switch, Route } from "react-router-dom";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";
import WhoWeArePage from "../pages/WhoWeArePage";

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
        <Route path="/" exact>
          <MainPage />
        </Route>
      </Switch>
    </div>
  );
};

export default PageBody;
