import React from "react";

import Navbar from "./components/Navbar/Navbar";
import { CustomerReviews, Dashboard, Blogs, NotFound } from "./pages";

import { Box, Text } from "@chakra-ui/react";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <Box fontFamily={"'Poppins', sans-serif"}>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <Text mt="30px" fontSize={"4xl"} align="center">
              THIS IS HOMEPAGE
            </Text>
          }
        />
        <Route path="/reviews" element={<CustomerReviews />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Box>
  );
}

export default App;
