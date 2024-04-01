import axios, { AxiosResponse } from "axios";
import { useEffect, useState } from "react";

interface FetchData<T> {
  data: T | undefined;
  loading: boolean;
  error?: any;
  setData: any;
}

const useFetch = <T extends unknown>({
  url,
}: {
  url: string;
}): FetchData<T> => {
  const [data, setData] = useState<T>();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<any>();

  useEffect(() => {
    setLoading(true);
    axios
      .get<T>(url)
      .then((response: AxiosResponse<T>) => {
        setData(response.data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [url]);

  return {
    data,
    loading,
    error,
    setData,
  };
};

export default useFetch;
