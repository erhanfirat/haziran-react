import { createContext, useState } from "react";

export const CounterContext = createContext();

const CounterProvider = ({ children }) => {
  const [counter, setCounter] = useState(100);
  const [artisMiktari, setArtisMiktari] = useState(5);
  const [users, setUsers] = useState([]);

  const addNewUser = (user) => setUsers([...users, user]);


  return (
    <CounterContext.Provider
      value={{
        counter,
        setCounter,
        artisMiktari,
        setArtisMiktari,
      }}
    >
      {children}
    </CounterContext.Provider>
  );
};

export default CounterProvider;
