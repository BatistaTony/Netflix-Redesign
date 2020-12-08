import styled from "styled-components";
import { flexbox, getFont } from "../../constants/functionsStyles";
import Colors from "./../../constants/colors";
import { motion } from "framer-motion";

export const OverlayMovie = styled(motion.div)`
  flex: 1;
  ${flexbox("column", "flex-start", "center")};
  z-index: 99999;
`;

export const ModalMovie = styled.div`
  box-shadow: 0 0 10px ${Colors.bg};

  .divBtns {
    ${flexbox()};
  }
`;

export const CoverMovie = styled.div`
  width: 100%;
  background: ${({ cover }) => `url(${cover})`};
  background-size: cover;
  height: 80vh;
`;

export const MovieInfo = styled.div`
  padding: 40px;
  padding-left: 70px;
  box-sizing: border-box;
  width: 100%;
  height: auto;
`;

export const Title = styled.h1`
  ${getFont()};
  font-size: 30pt;
  margin-bottom: 10px;
  color: white;
`;

export const Description = styled.p`
  ${getFont()};
  font-size: 15pt;
  margin-bottom: 10px;
  color: white;
  width: 70%;
`;

export const Year = styled(Description)`
  color: ${Colors.title};
`;

export const ButtonWatchMovie = styled.button`
  height: 40px;
  border: none;
  outline: none;
  background: ${({ back }) => (back ? `${Colors.text}` : "#ffd237")};
  ${getFont()};
  color: black;
  font-size: 12pt;
  padding-left: 20px;
  padding-right: 20px;
  margin-top: 20px;
  margin-right: 20px;
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    opacity: 0.7;
  }
`;
