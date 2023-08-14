import { useEffect } from "react";
import PageDefault from "./PageDefault";

const WhoWeArePage = () => {
  useEffect(() => {
    //axios.post("sayfaya-clicklendi", { sayfa: "hakkimizda" });
  }, []);

  return (
    <PageDefault pageTitle={"Hakkımızda"}>
      <p>Lorem ipsum bla bla......</p>
    </PageDefault>
  );
};

export default WhoWeArePage;
