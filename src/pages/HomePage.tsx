import React, { useEffect, useState } from "react";
import { searchGiphy } from "../services/giphyService";
import useDebounce from "../hooks/useDebounce";
import GifGrid from "../components/gifGrid";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);
  const [gifs, setGifs] = useState<[]>([]);
  useEffect(() => {
    searchGiphy(debouncedSearchValue, 20, 5).then((gifs) => {
      setGifs(gifs.data.data);
      console.log(gifs.data.data);
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
      <GifGrid gifs={gifs} />
    </div>
  );
};
