import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState();

  useEffect(() => {
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "c14d7ea104msh5e8853941457b70p142218jsn5f367efc731a",
        "X-RapidAPI-Host": "anime-db.p.rapidapi.com",
      },
    };

    fetch(url, options)
      .then((response) => response.json())
      .then((response) => setData(response.data))
      .catch((err) => console.error(err));
  }, [url]);
  return { data };
};

export default useFetch;
