import { useEffect, useState } from "react";

import { productDataType, ProductObjModel } from "../components/Type/ReactTupe";

const initialObject = {
  category: "",
  description: "",
  id: 0,
  image: "",
  price: 0,
  rating: {},
  title: "",
};

const useFetch = (url: string) => {
  const abortController = new AbortController();
  const signal = abortController.signal;

  const [productData, setProductData] = useState<ProductObjModel | null>(
    initialObject
  );
  const [isPending, setPending] = useState(true); // Set initial pending state to true
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    setPending(true); // Set pending state to true before the fetch

    fetch(url, { signal })
      .then((res) => {
        if (!signal.aborted) {
          return res.json();
        }
      })
      .then((response) => {
        if (!signal.aborted) {
          setProductData(response);
          setPending(false); // Set pending state to false on success
        }
      })
      .catch((error) => {
        if (!signal.aborted) {
          setErrorMsg(error.message);
          setPending(false); // Set pending state to false on error
        }
      });

    return () => {
      abortController.abort();
    };
  }, [url]);

  return [productData, isPending, errorMsg];
};

export default useFetch;
