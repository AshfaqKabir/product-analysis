import React from "react";
import { Box, Text, Flex, Link, Container, Button } from "@chakra-ui/react";

import { errorGif } from "../assets";
import { Link as RouteLink } from "react-router-dom";

const NotFound = () => {
  return (
    <Container maxW={"1300px"}>
      <Box textAlign={"center"}>
        <Flex mb="12px" alignItems={"center"} justifyContent="center">
          <Box>
            <Text
              mb="8px"
              maxW={"700px"}
              fontSize={"44px"}
              lineHeight="56px"
              fontWeight="bold"
            >
              404, Looks Like You Came To The Stone Age!!
            </Text>
            <Link as={RouteLink} to="/">
              <Button
                colorScheme="red"
                variant="ghost"
                transition={"all .3s linear"}
                _hover={{ bg: "#FFD1D16B" }}
              >
                Return Home
              </Button>
            </Link>
          </Box>
        </Flex>
        {/* ERROR GIF */}
        <Flex
          // width={"600px"}
          // height="350px"
          alignItems={"center"}
          justifyContent="center"
          overflow={"visible"}
        >
          <Box
            width={"1000px"}
            height="455px"
            bgImage={`url('${errorGif}')`}
            bgSize="cover"
            bgPos="center center"
            backgroundRepeat="no-repeat"
          />
        </Flex>
        {/* <Img src={errorGif} /> */}
      </Box>
    </Container>
  );
};

export default NotFound;
