import { createContext, useContext, useReducer, useState } from "react";
import { CounterContext } from "./CounterProvider";
import axios from "axios";
import { axiosWithAuth } from "../api/api";

export const SiteGlobalContext = createContext();

const themeReducer = (state, action) => {
  switch (action.type) {
    case "SET_THEME_LIGHT":
      return "light";

    case "SET_THEME_DARK":
      return "dark";

    default:
      return state;
  }
};

const SiteGlobalProvider = ({ children }) => {
  const [language, setLanguage] = useState("tr");
  const [products, setProducts] = useState([]);
  const [theme, dispatchTheme] = useReducer(themeReducer, "light");
  const makeLight = () => dispatchTheme({ type: "SET_THEME_LIGHT" });
  const makeDark = () => dispatchTheme({ type: "SET_THEME_DARK" });

  const loadProducts = () => {
    axiosWithAuth().get("products").then((res) => setProducts(res.data));
  };

  return (
    <SiteGlobalContext.Provider
      value={{
        language,
        setLanguage,
        theme,
        makeLight,
        makeDark,
        products,
        loadProducts,
      }}
    >
      {children}
    </SiteGlobalContext.Provider>
  );
};

export default SiteGlobalProvider;
