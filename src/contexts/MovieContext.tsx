import { createContext, useState } from "react";
import { TMovie } from "../../types";

type TContext = {
  movie: TMovie;
  setMovie: (movie: TMovie) => void;
};

export const MovieContext = createContext<TContext>({
  movie: {
    cover: "",
    description: "",
    title: "",
    year: "",
  },
  setMovie: () => {},
});

export const MovieProvider = (props) => {
  const [movie, setMovie] = useState<TMovie>({
    cover: "",
    description: "",
    title: "",
    year: "",
  });

  return (
    <MovieContext.Provider value={{ movie, setMovie }}>
      {props.children}
    </MovieContext.Provider>
  );
};
