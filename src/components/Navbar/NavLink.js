import React from "react";

import { Link as RouteLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavLink = ({ route, name }) => {
  return (
    <Link
      as={RouteLink}
      to={route || `/${name.toLowerCase()}`}
      fontWeight="medium"
      color={"#4d4747"}
      position={"relative"}
      transition="color .1s ease"
      _after={{
        content: '""',
        position: "absolute",
        background: "#e12121",
        width: 0,
        height: "2px",
        left: "-25%",
        right: "25%",
        bottom: "-6px",
        transition: ".4s",
      }}
      _hover={{
        _after: { width: "150%" },
        cursor: "pointer",
        color: "#e12121",
      }}
    >
      {name}
    </Link>
  );
};

export default NavLink;
