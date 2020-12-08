import styled from "styled-components";
import { flexbox, getFont } from "../../constants/functionsStyles";
import Colors from "./../../constants/colors";
import { motion } from "framer-motion";

export const NavbarStyled = styled.div`
  width: 100%;
  height: 100%;
  background: gray;

  ${flexbox("row", "space-between", "center")};
  box-sizing: border-box;
  padding-left: 3%;
  padding-right: 3%;
`;

export const WrapperMenuAndLogo = styled.div`
  ${flexbox("row", "space-between", "center")};
  width: 45%;
`;

export const ButtonSearch = styled.button`
  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  svg {
    fill: ${Colors.text};
    width: 2.3rem;
    transition: 0.5s;

    @media (max-width: 2500px) {
      width: 1.9rem;
    }

    @media (max-width: 2000px) {
      width: 1.5rem;
    }

    @media (max-width: 1500px) {
      width: 1rem;
    }
  }

  &:hover {
    svg {
      fill: white;
    }
  }
`;

export const Logo = styled.img`
  width: 18rem;

  @media (max-width: 2500px) {
    width: 15rem;
  }

  @media (max-width: 2000px) {
    width: 13rem;
  }

  @media (max-width: 1500px) {
    width: 8rem;
  }
`;

export const Menu = styled.ul`
  list-style: none;
  ${flexbox()};
  width: 100%;
`;

export const MenuItem = styled.li`
  ${getFont()};
  font-size: 25pt;
  color: ${Colors.text};
  transition: 0.5s;
  cursor: pointer;
  height: 100%;
  margin-left: 70px;
  padding-right: ${({ first }: any) => (first ? `70px` : 0)};

  border-right: ${({ first }: any) =>
    first ? `2px solid ${Colors.text}` : "none"};

  &:hover {
    color: white;
  }

  @media (max-width: 2500px) {
    font-size: 20pt;
    margin-left: 50px;
    padding-right: ${({ first }: any) => (first ? `50px` : 0)};
  }

  @media (max-width: 2000px) {
    font-size: 15pt;
    margin-left: 40px;
    padding-right: ${({ first }: any) => (first ? `40px` : 0)};
  }

  @media (max-width: 1500px) {
    font-size: 11pt;
    margin-left: 30px;
    padding-right: ${({ first }: any) => (first ? `30px` : 0)};
  }
`;

export const MenuRightSide = styled(Menu)`
  width: auto;
`;

export const MenuRightSideItem = styled.li`
  margin-left: 60px;
  ${flexbox()};
  cursor: pointer;
  transition: 0.5s;
  position: relative;

  svg {
    fill: ${Colors.text};
    width: 2.5rem;
    transition: 0.5s;

    @media (max-width: 2500px) {
      width: 2rem;
    }

    @media (max-width: 2000px) {
      width: 1.7rem;
    }

    @media (max-width: 1500px) {
      width: 1rem;
    }
  }

  &:hover {
    svg {
      fill: white;
    }
  }

  @media (max-width: 2500px) {
    margin-left: 50px;
  }

  @media (max-width: 2000px) {
    margin-left: 40px;
  }

  @media (max-width: 1500px) {
    margin-left: 30px;
  }
`;

export const Notification = styled(motion.ul)`
  width: 250px;
  height: auto;
  border-radius: 5px;
  top: 35px;
  right: -30%;
  position: absolute;
  z-index: 9999;
  background: ${Colors.bg};
  list-style: none;

  li {
    width: 100%;
    background: ${Colors.bg};
    margin-bottom: 5px;
    ${flexbox("row", "flex-start", "center")};
    box-sizing: border-box;
    padding-left: 10px;
    padding-top: 7px;
    padding-bottom: 7px;
    box-shadow: 0 0 3px white;
    border-radius: 5px;

    &:last-child {
      margin-bottom: 0;
    }

    .cover {
      width: 40px;
      height: 40px;
      border-radius: 100%;
      background: red;
    }

    .not_text {
      ${getFont()};
      font-size: 10pt;
      color: black;
      margin-left: 10px;
      color: white;
    }
  }
`;

export const Avatar = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 100%;
  background: ${({ src }: any) => `url(${src})`};
  background-size: cover;

  @media (max-width: 2500px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 2000px) {
    width: 40px;
    height: 40px;
  }

  @media (max-width: 1500px) {
    width: 30px;
    height: 30px;
  }
`;

export const OverlaySearch = styled(motion.div)`
  width: 100%;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.5);
  ${flexbox("column", "flex-start", "center")};
  z-index: 99999;
`;

export const SeachModal = styled(motion.div)`
  position: relative;
  width: 35%;
  height: ${({ length }) => (length > 2 ? "85vh" : "300px")};
  border-radius: 40px;
  background: ${Colors.bg};
  box-shadow: 0 0 10px ${Colors.bg};
  margin-top: 70px;
  ${flexbox("column", "flex-start", "center")};
  padding-bottom: ${({ length }) => (length > 2 ? "20px" : "0")};

  @media (max-width: 2500px) {
    border-radius: 30px;
    margin-top: 50px;
  }

  @media (max-width: 2000px) {
    border-radius: 20px;
    margin-top: 45px;
  }

  @media (max-width: 1500px) {
    border-radius: 10px;
    margin-top: 40px;
  }
`;

export const ButtonCloseModal = styled.button`
  width: 30px;
  height: 30px;
  outline: none;
  border: none;
  background: transparent;
  align-self: flex-end;
  margin: 40px;
  cursor: pointer;

  svg {
    width: 60px;
    height: 60px;
    fill: white;

    @media (max-width: 2500px) {
      width: 50px;
      height: 50px;
    }

    @media (max-width: 2000px) {
      width: 40px;
      height: 40px;
    }

    @media (max-width: 1500px) {
      width: 35px;
      height: 35px;
    }
  }

  @media (max-width: 2500px) {
    margin: 30px;
  }

  @media (max-width: 2000px) {
    margin: 20px;
  }

  @media (max-width: 1500px) {
    margin: 10px;
  }
`;

export const FormGroup = styled.div`
  width: 90%;
  height: 70px;
  border-radius: 5px;
  background: ${Colors.text};
  overflow: hidden;
  margin-top: 10px;
  transition: 0.5s;

  &:focus-within {
    box-shadow: 0 0 5px darkmagenta;
  }

  input {
    outline: none;
    border: none;
    width: 100%;
    height: 100%;
    font-size: 25pt;
    ${getFont()};
    background-color: transparent;
    box-sizing: border-box;
    padding-left: 25px;
    color: ${Colors.bg};

    @media (max-width: 2500px) {
      font-size: 20pt;
    }

    @media (max-width: 2000px) {
      font-size: 15pt;
    }

    @media (max-width: 1500px) {
      font-size: 12pt;
      padding-left: 15px;
    }
  }

  @media (max-width: 2500px) {
    border-radius: 15px;
    height: 60px;
  }

  @media (max-width: 2000px) {
    border-radius: 10px;
    height: 45px;
  }

  @media (max-width: 1500px) {
    height: 35px;
    border-radius: 5px;
  }
`;

export const SearchResult = styled.ul`
  width: 90%;
  height: 85%;
  list-style: none;
  margin-top: 50px;
  overflow: auto;
  ${flexbox("column")};
  scroll-behavior: smooth;

  @media (max-width: 2500px) {
    margin-top: 40px;
  }

  @media (max-width: 2000px) {
    margin-top: 30px;
  }

  @media (max-width: 1500px) {
    margin-top: 20px;
  }

  ::-webkit-scrollbar {
    width: 20px;

    @media (max-width: 2500px) {
      width: 15px;
    }

    @media (max-width: 2000px) {
      width: 10px;
    }

    @media (max-width: 1500px) {
      width: 6px;
    }
  }

  ::-webkit-scrollbar-track {
    background: transparent;
  }

  ::-webkit-scrollbar-thumb {
    background: #888;
    border-radius: 30px;
  }
`;

export const SearchResultItem = styled(motion.li)`
  width: 100%;
  height: auto;
  margin-bottom: 65px;
  display: grid;
  grid-template-columns: 100px 1fr;
  cursor: pointer;

  @media (max-width: 2500px) {
    margin-bottom: 50px;
    grid-template-columns: 60px 1fr;
  }

  @media (max-width: 2000px) {
    margin-bottom: 45px;
    grid-template-columns: 60px 1fr;
  }

  @media (max-width: 1500px) {
    margin-bottom: 35px;
    grid-template-columns: 60px 1fr;
  }

  .cover {
    width: 100px;
    height: 100px;
    border-radius: 20px;
    background: ${({ cover }) => `url(${cover})`};
    background-size: cover;

    @media (max-width: 2500px) {
      width: 60px;
      height: 60px;
      border-radius: 13px;
    }

    @media (max-width: 2000px) {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }

    @media (max-width: 1500px) {
      width: 60px;
      height: 60px;
      border-radius: 10px;
    }
  }

  .itemInfo {
    margin-left: 20px;
    height: 100%;
    ${flexbox("column", "flex-start", "space-between")};
    padding-top: 5px;

    @media (max-width: 2500px) {
      margin-left: 15px;
      padding-top: 3px;
    }

    @media (max-width: 2000px) {
      margin-left: 12px;
      padding-top: 2px;
    }

    @media (max-width: 1500px) {
      margin-left: 10px;
      padding-top: 1px;
    }

    h1 {
      ${getFont()};
      font-size: 25pt;
      margin-bottom: 3px;
      color: white;

      @media (max-width: 2500px) {
        font-size: 20pt;
        margin-bottom: 3px;
      }

      @media (max-width: 2000px) {
        font-size: 15pt;
        margin-bottom: 3px;
      }

      @media (max-width: 1500px) {
        font-size: 12pt;
        margin-bottom: 3px;
      }
    }

    p {
      ${getFont()};
      margin-bottom: 3px;
      font-size: 20pt;
      color: white;

      @media (max-width: 2500px) {
        font-size: 18pt;
        margin-bottom: 3px;
      }

      @media (max-width: 2000px) {
        font-size: 15pt;
        margin-bottom: 3px;
      }

      @media (max-width: 1500px) {
        font-size: 11pt;
        margin-bottom: 3px;
      }
    }
  }
`;
