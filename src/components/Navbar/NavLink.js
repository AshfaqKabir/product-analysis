import React from "react";

import { Link as RouteLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const NavLink = ({ route, name }) => {
  return (
    <Link
      as={RouteLink}
      to={route || `/${name.toLowerCase()}`}
      position={"relative"}
      _after={{
        content: '""',
        position: "absolute",
        background: "red",
        width: 0,
        height: "2px",
        left: "-25%",
        right: "25%",
        bottom: "-6px",
        transition: ".3s",
      }}
      _hover={{
        _after: { width: "150%" },
        cursor: "pointer",
      }}
    >
      {name}
    </Link>
  );
};

export default NavLink;
