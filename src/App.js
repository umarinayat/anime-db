import Search from "./Search";
import CardList from "./CardList";
import { useState } from "react";

function App() {
  const [searchValue, setSearchValue] = useState("");
  const getSearchValue = (value) => {
    setSearchValue(value);
  };
  return (
    <div className="content">
      <h1>Anime Database</h1>
      <Search onSubmit={getSearchValue} />
      <CardList searchValue={searchValue} />
    </div>
  );
}

export default App;
