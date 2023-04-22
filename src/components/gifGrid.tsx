import React from "react";
import { Gif } from "../utils/types/gif.type";
import "../styles/gifGrid.css";

interface Props {
  gifs: Gif[];
}

export const GifGrid: React.FC<Props> = ({ gifs }) => {
  return (
    <div className="grid-container">
      {gifs.map((gif, index) => (
        <div className="grid-item" key={index}>
          <img
            className="grid-item-img"
            src={gif.images.fixed_height.url}
            alt={`GIF ${index}`}
            onClick={() => window.open(gif.url, "_blank")}
          />
        </div>
      ))}
    </div>
  );
};

export default GifGrid;
