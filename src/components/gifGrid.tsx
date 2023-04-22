import React from "react";
import { Gif } from "../utils/types/gif.type";

interface Props {
  gifs: Gif[];
}

export const GifGrid: React.FC<Props> = ({ gifs }) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
        gap: "1rem",
      }}
    >
      {gifs.map((gif, index) => (
        <img
          key={index}
          src={gif.images.original.url}
          alt={`GIF ${index}`}
          style={{ maxWidth: "100%", height: "auto" }}
        />
      ))}
    </div>
  );
};

export default GifGrid;
