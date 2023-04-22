import React, { useEffect, useState } from "react";
import { searchGiphy } from "../services/giphyService";
import useDebounce from "../hooks/useDebounce";
import GifGrid from "../components/gifGrid";
import Pagination from "../components/Pagination";
import "../styles/homePage.css";

export const HomePage = () => {
  const [searchValue, setSearchValue] = useState<string>("");
  const debouncedSearchValue = useDebounce(searchValue, 300);
  const [gifs, setGifs] = useState<[]>([]);
  const [totalPages, setTotalPages] = useState<number>(1);
  const [offset, setOffset] = useState<number>(0);
  const [rowsPerPage, setRowsPerPage] = useState<number>(12);

  const handlePageChange = (page: number) => {
    setOffset((page - 1) * rowsPerPage);
  };
  useEffect(() => {
    setGifs([]);
    searchGiphy(debouncedSearchValue, offset, rowsPerPage).then((gifs) => {
      setGifs(gifs.data.data);
      // In documentation there is a limit of 4999 for offset so we limit to 4999 when calculate the total pages
      setTotalPages(
        Math.ceil(
          Math.min(gifs.data.pagination.total_count, 4999) / rowsPerPage
        )
      );
    });
  }, [debouncedSearchValue, offset, rowsPerPage]);
  return (
    <div className="container">
      <div className="top-container">
        <div className="header">Search for your favorite Gif</div>
        <input
          className="search-input"
          type="text"
          value={searchValue}
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </div>
      <GifGrid gifs={gifs} />
      <div className="bottom-container">
        {totalPages > 0 ? (
          <Pagination
            totalPages={totalPages}
            currentPage={offset / rowsPerPage + 1}
            onPageChange={handlePageChange}
          />
        ) : null}
      </div>
    </div>
  );
};
