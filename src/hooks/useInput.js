import { useState } from "react";

export const useInput = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const handleInputChange = (e) => {
    const { value, type, checked } = e.target;
    const inputValue = type === "checkbox" ? checked : value;

    setValue(inputValue);
  };

  return [value, handleInputChange];
};
