import React, { useState } from "react";
import "../styles/pagination.css";
interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

export const Pagination: React.FC<Props> = ({
  currentPage,
  totalPages,
  onPageChange,
}) => {
  const [pagesToShow, setPagesToShow] = useState(5);
  const [currentPageIndex, setCurrentPageIndex] = useState(currentPage - 1);

  const handleClick = (index: number) => {
    setCurrentPageIndex(index);
    onPageChange(index + 1);
  };

  const handlePrevClick = () => {
    if (currentPageIndex > 0) {
      setCurrentPageIndex(currentPageIndex - 1);
      onPageChange(currentPageIndex);
    }
  };

  const handleNextClick = () => {
    if (currentPageIndex < totalPages - 1) {
      setCurrentPageIndex(currentPageIndex + 1);
      onPageChange(currentPageIndex + 2);
    }
  };

  const renderPages = () => {
    const pages = [];

    for (let i = 0; i < totalPages; i++) {
      if (
        i === 0 ||
        i === totalPages - 1 ||
        (i >= currentPageIndex - pagesToShow &&
          i <= currentPageIndex + pagesToShow)
      ) {
        pages.push(
          <button
            className={`page-btn-${i === currentPageIndex ? "bold" : "normal"}`}
            key={i}
            onClick={() => handleClick(i)}
          >
            {i + 1}
          </button>
        );
      } else if (pages[pages.length - 1].props.children !== "...") {
        pages.push(
          <span className="page-btn-dots" key={i}>
            ...
          </span>
        );
      }
    }

    return pages;
  };

  return (
    <div
      className="pagination-container"
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <button
        className="page-btn-normal"
        onClick={handlePrevClick}
        disabled={currentPageIndex === 0}
      >
        {"<"}
      </button>
      {renderPages()}
      <button
        className="page-btn-normal"
        onClick={handleNextClick}
        disabled={currentPageIndex === totalPages - 1}
      >
        {">"}
      </button>
    </div>
  );
};

export default Pagination;
