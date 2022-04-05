import React, { useEffect, useState } from "react";
import Header from "./components/Header";
import axios from "axios";
import CharacterGrid from "./characters/CharacterGrid";
import Search from "./components/Search";

const App = () => {
  const [items, setItems] = useState([]);
  const [isloading, setisloading] = useState(true);
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchItems = async () => {
      const result = await axios(
        `https://www.breakingbadapi.com/api/characters?name=${query}`
      );
      setItems(result.data);
      setisloading(false);
    };
    fetchItems();
  }, [query]);

  return (
    <>
      <Header />
      <Search getQuery={(q) => setQuery(q)} />
      <CharacterGrid isloading={isloading} items={items} />
    </>
  );
};

export default App;
