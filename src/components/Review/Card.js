import React from "react";
import { Box, Flex, Img, Text } from "@chakra-ui/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ name, handle, rating, comment, section }) => {
  return (
    <Box
      p={"20px"}
      width={section ? "100%" : "380px"}
      height={"100%"}
      boxShadow={"2px 2px 30px rgba(0, 0, 0, .1)"}
      cursor="pointer"
      borderRadius={"6px"}
      _hover={{
        transform: "translateY(-10px)",
        transition: "all .3s ease",
      }}
    >
      {/* IMAGE, NAME and Handle */}
      <Flex mb="24px" alignItems={"center"} justifyContent="space-between">
        <Flex alignItems={"center"}>
          {/* IMAGE */}
          <Box
            mr="10px"
            width={"50px"}
            height={"50px"}
            borderRadius="50%"
            overflow={"hidden"}
            bg="#eee"
          >
            <Img
              src={`https://avatars.dicebear.com/api/avataaars/${name}.svg`}
            />
          </Box>

          {/* NAME AND HANDLE */}
          <Box>
            <Text
              as="strong"
              fontSize="1.1rem"
              letterSpacing={".5px"}
              color={"#3d3d3d"}
            >
              {name}
            </Text>
            <Text mt="-2px" fontSize=".8rem" color={"#979797"}>
              @{handle}
            </Text>
          </Box>
        </Flex>
        {/* RATING STAR */}
        <Box>
          {rating === 3 ? (
            <>
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
            </>
          ) : rating === 3.5 ? (
            <>
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star-half" color="#f9d71c" />
            </>
          ) : rating === 4 ? (
            <>
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
            </>
          ) : rating === 4.5 ? (
            <>
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star-half" color="#f9d71c" />
            </>
          ) : (
            <>
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
              <FontAwesomeIcon icon="fa-solid fa-star" color="#f9d71c" />
            </>
          )}
        </Box>
      </Flex>

      {/* REVIEW DESCRIPTION */}
      <Text
        mb="20px"
        fontSize={".9rem"}
        lineHeight="26px"
        textAlign="justify"
        color="#4b4b4b"
      >
        {comment}
      </Text>
    </Box>
  );
};

export default Card;
