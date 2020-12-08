import {
  Avatar,
  ButtonSearch,
  Logo,
  Menu,
  MenuItem,
  MenuRightSide,
  MenuRightSideItem,
  NavbarStyled,
  Notification,
  OverlaySearch,
  WrapperMenuAndLogo,
} from "./styles";

import { SearchIcon, BellIcon } from "./iconesSvg";
import { useState } from "react";
import ModalSearch from "./modal";

const Navbar = () => {
  const [showModal, setShowModal] = useState<boolean>(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <NavbarStyled>
      {showModal && (
        <OverlaySearch initial={{ opacity: 0.7 }} animate={{ opacity: 1 }}>
          <ModalSearch toggleModal={toggleModal} />
        </OverlaySearch>
      )}

      <WrapperMenuAndLogo>
        <Logo src="./images/logo.png" alt="Netflix" />

        <Menu>
          <ButtonSearch onClick={toggleModal}>
            <SearchIcon />
          </ButtonSearch>
          <MenuItem first={true}>BROWSE</MenuItem>
          <MenuItem>KIDS</MenuItem>
        </Menu>
      </WrapperMenuAndLogo>

      <MenuRightSide>
        <MenuRightSideItem>
          <BellIcon />
        </MenuRightSideItem>
        <MenuRightSideItem>
          <Avatar src="./images/avatar.JPG" />
        </MenuRightSideItem>
      </MenuRightSide>
    </NavbarStyled>
  );
};

export default Navbar;
