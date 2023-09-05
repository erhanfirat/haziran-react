import { Redirect } from "react-router-dom";

const ProtectedPage = ({ pageComponent: PageComponent, from }) => {
  return localStorage.getItem("token") ? (
    <PageComponent />
  ) : (
    // <Redirect to={"/login?from=" + from} from={from} />
    <Redirect
      to={{
        pathname: "/login",
        state: { referrer: from },
      }}
    />
  );
};
export default ProtectedPage;
