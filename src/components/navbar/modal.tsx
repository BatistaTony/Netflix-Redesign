import {
  ButtonCloseModal,
  FormGroup,
  SeachModal,
  SearchResult,
  SearchResultItem,
} from "./styles";

import { CloseIcon } from "./iconesSvg";
import { useContext, useState } from "react";
import { TMovie } from "../../../types";
import { MovieContext } from "../../contexts/MovieContext";

type TProps = {
  toggleModal: any;
};

const ModalSearch = ({ toggleModal }: TProps) => {
  const [animationModal, setAnimation] = useState<any>({ y: 0 });
  const { movie, setMovie } = useContext<any>(MovieContext);

  const results: Array<TMovie> = [
    {
      cover: "/images/photo1.jpg",
      title: "The Porsuit of Happiness",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Dolores placeat accusamus reiciendis.`,
      year: 2020,
    },
    {
      cover: "/images/photo1.jpg",
      title: "The Porsuit of Happiness",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores placeat accusamus reiciendis.`,
      year: 2020,
    },
    {
      cover: "/images/photo1.jpg",
      title: "The Porsuit of Happiness",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores placeat accusamus reiciendis.`,
      year: 2020,
    },
    {
      cover: "/images/photo1.jpg",
      title: "The Porsuit of Happiness",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores placeat accusamus reiciendis.`,
      year: 2020,
    },
    {
      cover: "/images/photo1.jpg",
      title: "The Porsuit of Happiness",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores placeat accusamus reiciendis.`,
      year: 2020,
    },
    {
      cover: "/images/photo1.jpg",
      title: "The Porsuit of Happiness",
      description: `Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Dolores placeat accusamus reiciendis.`,
      year: 2020,
    },
  ];

  const toggleModalByOther = () => {
    setAnimation({ y: -1000 });

    setTimeout(() => {
      toggleModal();
    }, 300);
  };

  const selectMovie = async () => {
    await toggleModalByOther();
    setMovie({ cover: "", description: "", title: "pumba", year: "" });
  };

  return (
    <SeachModal
      initial={{ y: -100 }}
      transition={{ duration: 0.3 }}
      animate={{ ...animationModal }}
      length={results.length}
    >
      <ButtonCloseModal onClick={toggleModalByOther}>
        <CloseIcon />
      </ButtonCloseModal>

      <FormGroup>
        <input type="text" placeholder="search for movie" />
      </FormGroup>

      <SearchResult length={results.length}>
        {results.map((item: TMovie, index) => (
          <SearchResultItem onClick={selectMovie} key={index}>
            <div className="cover"></div>
            <div className="itemInfo">
              <h1>{item.title}</h1>
              <p>{item.description}</p>

              <p>{item.year}</p>
            </div>
          </SearchResultItem>
        ))}
      </SearchResult>
    </SeachModal>
  );
};

export default ModalSearch;
