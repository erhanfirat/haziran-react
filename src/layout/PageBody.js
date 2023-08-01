import Counter from "../components/Counter";
import CounterPage from "../pages/CounterPage";
import MainPage from "../pages/MainPage";

const PageBody = ({ userName }) => {
  return (
    <div>
      <MainPage />
      <CounterPage userName={userName} />
    </div>
  );
};

export default PageBody;
