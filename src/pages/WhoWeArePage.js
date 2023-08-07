import { useEffect } from "react";

const WhoWeArePage = () => {
  useEffect(() => {
    //axios.post("sayfaya-clicklendi", { sayfa: "hakkimizda" });
  }, []);

  return (
    <div>
      <h2>Biz Kimiz?</h2>
      <hr />
      <p>Biz var ya biz... </p>
    </div>
  );
};

export default WhoWeArePage;
