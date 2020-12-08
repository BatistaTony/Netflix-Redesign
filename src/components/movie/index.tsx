import { useContext, useState } from "react";
import { MovieContext } from "../../contexts/MovieContext";
import {
  ButtonWatchMovie,
  CoverMovie,
  Description,
  ModalMovie,
  MovieInfo,
  OverlayMovie,
  Title,
  Year,
} from "./styles";

const Movie = () => {
  const [animationMovie, setAnimation] = useState<any>({ x: 0 });
  const [movie, setMovie] = useContext<any>(MovieContext);

  const changeAnimation = () => {
    setAnimation({ x: 1200 });
  };

  const backHome = () => {
    changeAnimation();

    setTimeout(() => {
      setMovie({
        cover: "",
        description: "",
        title: "",
        year: "",
      });
    }, 300);
  };

  return (
    <OverlayMovie
      initial={{ x: 1000 }}
      transition={{ duration: 0.3 }}
      animate={animationMovie}
    >
      <CoverMovie cover={"/images/photo1.jpg"} />
      <MovieInfo>
        <Title>The Pursuit of Happiness</Title>

        <Description>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut eaque
          accusamus id exercitationem eveniet accusantium a, nihil aspernatur
          voluptas, voluptatem, doloremque quibusdam labore provident fugiat ea
          pariatur. Fugit alias recusandae, commodi accusamus voluptate eius
          consectetur, reiciendis magni illum repellendus libero!
        </Description>

        <Year>2020</Year>

        <div className="divBtns">
          <ButtonWatchMovie onClick={backHome} back={true}>
            Back
          </ButtonWatchMovie>
          <ButtonWatchMovie>Watch Now</ButtonWatchMovie>
        </div>
      </MovieInfo>
    </OverlayMovie>
  );
};

export default Movie;
