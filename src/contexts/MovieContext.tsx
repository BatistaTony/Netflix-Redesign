import { createContext, useState } from "react";
import { TMovie } from "../../types";

export const MovieContext = createContext<TMovie>({
  cover: "",
  description: "",
  title: "",
  year: "",
});

export const MovieProvider = (props) => {
  const [movie, setMovie] = useState<TMovie>({
    cover: "",
    description: "",
    title: "",
    year: "",
  });

  return (
    <MovieContext.Provider value={[movie, setMovie]}>
      {props.children}
    </MovieContext.Provider>
  );
};
