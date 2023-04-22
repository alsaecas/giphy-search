import React, { useEffect, useState } from "react";
import { searchGiphy } from "../services/giphyService";
import useDebounce from "../hooks/useDebounce";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);
  useEffect(() => {
    searchGiphy(debouncedSearchValue, 20, 5).then((gifs) => {
      console.log(gifs);
    });
  }, [debouncedSearchValue]);
  return (
    <div>
      <h1>Hello World!</h1>
      <input
        type="text"
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)}
      />
    </div>
  );
};
