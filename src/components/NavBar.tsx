import { HStack } from "@chakra-ui/layout";
import { Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.webp";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

const NavBar = () => {
  return (
    <div>
      <HStack padding="10px">
        <Link to={"/"}>
          <Image src={Logo} boxSize={59} objectFit={"cover"} />
        </Link>
        <SearchInput />
        <ColorModeSwitch />
      </HStack>
    </div>
  );
};

export default NavBar;
