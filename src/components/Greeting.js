import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const Greeting = () => {
  const title = useSelector((store) => store.title);

  return (
    <h1
      id="greeting-header"
      className="p-2 my-2 border-2 border-solid border-red-500 "
    >
      {title}
    </h1>
  );
};

export default Greeting;
