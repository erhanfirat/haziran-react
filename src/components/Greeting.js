import { useEffect } from "react";

const Greeting = ({ userName }) => {
  // console.log("props: ", props);
  // props?.logUser();

  useEffect(() => {
    // component did mount
    // console.warn("[ComponentDidMount] Greeting componenti yüklendi!");
  }, []);

  useEffect(() => {
    // component did update
    // console.warn("[ComponentDidUpdate] Greeting componenti yüklendi!");
  });

  useEffect(() => {
    console.log("kullanıcı adı değiştirildi! " + userName);
  }, [userName]);

  useEffect(() => {
    // component did mount
    console.log("Greeting componenti mount edildi!");
  }, []);

  useEffect(() => {
    // component did update
    console.log("Greeting componenti update edildi!");
  });

  return <h1>Sayfama hoşgeldiniz {userName}!...</h1>;
};

export default Greeting;
