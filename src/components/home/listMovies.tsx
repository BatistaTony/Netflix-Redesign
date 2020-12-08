import { useContext, useState } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import { ListMovieStyled, SingleMovie } from "./styles";

type TListMovies = {
  movies: Array<any>;
};

const ListMovie = ({ movies }: TListMovies) => {
  const [movie, setMovie] = useContext<any>(MovieContext);

  const selectMovie = () => {
    setMovie({
      cover: "",
      description: "",
      title: "The fool for you",
      year: "",
    });
  };

  return (
    <ListMovieStyled>
      {movies.map((item, index) => (
        <SingleMovie onClick={selectMovie} key={index} image={item} />
      ))}
    </ListMovieStyled>
  );
};

export default ListMovie;
