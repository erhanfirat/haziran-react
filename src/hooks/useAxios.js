import axios from "axios";
import { useState } from "react";
import { axiosWithAuth } from "../api/api";

export const REQ_TYPES = Object.freeze({
  GET: "get",
  POST: "post",
  PUT: "put",
  DELETE: "delete",
});

export const useAxios = ({
  initialData,
  reqType,
  endpoint,
  payload,
  config,
}) => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState(initialData);
  const [err, setErr] = useState("");

  const doRequest = () => {
    setLoading(true);
    return axiosWithAuth()
      [reqType](endpoint, payload || config, payload && config)
      .then((res) => {
        setData(res.data);
        return res.data;
      })
      .catch((err) => {
        setErr(err);
        throw err;
      })
      .finally(() => setLoading(false));
  };

  return [doRequest, data, loading, err];
};
