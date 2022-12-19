import React from "react";

import Navbar from "./components/Navbar/Navbar";
import { CustomerReviews, Dashboard, About, NotFound } from "./pages";

import { Box, Flex, Text } from "@chakra-ui/react";
import { Route, Router, Routes } from "react-router-dom";

function App() {
  return (
    <Box fontFamily={"'Poppins', sans-serif"}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Text fontSize={"4xl"} align="center" mt="30px">
              THIS IS HOMEPAGE
            </Text>
          }
        />
        <Route path="/reviews" element={<CustomerReviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/about" element={<About />} />
        <Route path="/reviews" element={<CustomerReviews />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
