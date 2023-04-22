import React, { useEffect, useState } from "react";
import { searchGiphy } from "../services/giphyService";

export const HomePage = () => {
  useEffect(() => {
    searchGiphy("cheeseburgers", 20, 5).then((gifs) => {
      console.log(gifs);
    });
  }, []);
  return <h1>Hello World!</h1>;
};
