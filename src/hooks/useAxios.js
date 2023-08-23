import axios from "axios";
import { useState } from "react";

export const useAxios = (initialData, reqType, endpoint, payload) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [err, setErr] = useState();

  const doRequest = () => {
    setLoading(true);
    setTimeout(() => {
      axios[reqType](endpoint, payload)
        .then((res) => setData(res.data))
        .catch((err) => setErr(err))
        .finally(() => setLoading(false));
    }, 2000);
  };

  return [data, doRequest, loading, err];
};
