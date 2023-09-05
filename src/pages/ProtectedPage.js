import { Redirect } from "react-router-dom";

const ProtectedPage = ({ PageComponent, from }) => {
  return localStorage.getItem("token") ? (
    <PageComponent />
  ) : (
    <Redirect
      to={{
        pathname: "/login",
        state: { referrer: from },
      }}
    />
  );
};
export default ProtectedPage;
