import React from "react";
import { Box, Container, Flex } from "@chakra-ui/react";
import NavLink from "./NavLink";

const Navbar = () => {
  return (
    <Container maxW={"600px"} mb="24px">
      <Flex minH={"64px"} alignItems="center" justifyContent="space-around">
        <NavLink name="Home" route="/" />
        <NavLink name="Reviews" />
        <NavLink name="Dashboard" />
        <NavLink name="About US" route="/about" />
      </Flex>
      <hr />
    </Container>
  );
};

export default Navbar;
