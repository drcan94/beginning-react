import React, { useEffect, useState } from "react";

const DataFetcher = ({ render, url }) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    if (url.includes("desserts")) {
      // mock data
      setData(["cake", "ice cream", "pie", "brownies"]);
    } else {
      setData(["water", "soda", "juice"]);
    }
  }, [url]);

  return render(data);
};

export const DesertsCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon.com/desserts"
      render={(data) => <p>Deserts Count: {data.length}</p>}
    />
  );
};

export const DrinksCount = () => {
  return (
    <DataFetcher
      url="https://littlelemon.com/drinks"
      render={(data) => <p>Drinks Count: {data.length}</p>}
    />
  );
};

