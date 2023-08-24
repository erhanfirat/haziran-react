import { useEffect, useState } from "react";

const Greeting = ({ userName, surname }) => {
  const [now, setNow] = useState(new Date());

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

  return (
    <h1 id="greeting-header" className="p-2 my-2 border-2 border-solid border-red-500 ">
      Sayfama hoşgeldiniz {userName} {surname}!...
    </h1>
  );
};

export default Greeting;
