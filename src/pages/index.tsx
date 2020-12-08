import { useContext } from "react";
import { TMovie } from "../../types";
import ListMovie from "../components/home/listMovies";
import { ContainerHome, Title } from "../components/home/styles";
import Layout from "../components/layout";
import Movie from "../components/movie";
import { MovieContext } from "./../contexts/MovieContext";

export default function Home() {
  const { movie, setMovie } = useContext<any>(MovieContext);

  const movies = [
    "/images/photo1.jpg",
    "/images/photo2.jpg",
    "/images/photo3.jpg",
    "/images/photo4.jpg",
    "/images/photo5.jpg",
    "/images/photo6.jpg",
    "/images/photo7.jpg",
    "/images/photo8.jpg",
    "/images/photo9.jpg",
    "/images/photo10.jpg",
    "/images/photo11.jpg",
    "/images/photo12.jpg",
  ];

  return (
    <Layout>
      {movie.title.length < 2 ? (
        <ContainerHome>
          <Title initial={{ scale: 0.1 }} animate={{ scale: 1 }}>
            POPULAR
          </Title>
          <ListMovie movies={movies} />
        </ContainerHome>
      ) : (
        <Movie />
      )}
    </Layout>
  );
}
