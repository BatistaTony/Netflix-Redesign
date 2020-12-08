import styled, { createGlobalStyle } from "styled-components";

import Colors from "./../../constants/colors";

export const GlobalStyle = createGlobalStyle`

* {
    margin:0;
    padding:0;
}

`;

export const LayoutMainContainer = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${Colors.bg};
  display: grid;
  grid-template-rows: 200px 1fr;
  overflow-y: auto;

  @media (max-width: 2500px) {
    grid-template-rows: 170px 1fr;
  }

  @media (max-width: 2000px) {
    grid-template-rows: 140px 1fr;
  }

  @media (max-width: 1500px) {
    grid-template-rows: 100px 1fr;
  }
`;

export const ChildrenSpace = styled.div`
  flex: 1;
`;
