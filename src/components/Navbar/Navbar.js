import React from "react";
import { Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <div>
      <Flex alignItems="center" justifyContent="space-around">
        <NavLink name="Home" route="/" />
        <NavLink name="Reviews" />
        <NavLink name="Dashboard" />
        <NavLink name="About US" route="/about" />
      </Flex>
    </div>
  );
};

export default Navbar;
