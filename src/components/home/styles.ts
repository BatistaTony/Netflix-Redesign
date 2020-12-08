import styled, { keyframes } from "styled-components";
import { flexbox, getFont } from "../../constants/functionsStyles";
import Colors from "./../../constants/colors";

export const ContainerHome = styled.div`
  ${flexbox("column", "center", "center")};
  width: 100%;
  height: 100%;
  box-sizing: border-box;
`;

export const ListMovieStyled = styled.div`
  width: 65%;
  height: 75%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(3, 1fr);
  z-index: 99;
`;

const AnimationScale = keyframes`

0% {
    transform: scale(.5);


}

100% {
    transform: scale(1);
}

`;

export const SingleMovie = styled.div`
  flex: 1;
  transition: 0.5s;
  background: ${({ image }) => `url(${image})`} no-repeat;
  background-size: cover;
  opacity: 0.7;
  animation: ${AnimationScale} 0.5s ease-in-out;
 
  &:hover {
    transform: scale(1.3);
    box-shadow: 0 0 3px white;
    opacity: 1;
    z-index: 999;
    cursor: pointer;
  }
`;

const AnimationTitle = keyframes`

0% {
    z-index:-1;
    opacity:0;
    transform: translateY(60px);


}

100% {
    z-index:1;
    opacity:1;

    transform: translateY(0px);

}

`;

export const Title = styled.h1`
  font-size: 50pt;
  width: 65%;
  ${getFont("Black")};
  color: ${Colors.title};
  animation: ${AnimationTitle} 1.5s;
`;
