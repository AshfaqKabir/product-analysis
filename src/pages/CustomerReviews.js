import { Container, Grid } from "@chakra-ui/react";
import React from "react";
import Card from "../components/Review/Card";

const CustomerReviews = () => {
  return (
    <Container maxW={"1300px"}>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        <Card rating={3} name={"3"} section />
        <Card rating={4.5} section />
        <Card rating={4} section />
        <Card section />
        <Card rating={3.5} section />
        <Card rating={4} section />
      </Grid>
    </Container>
  );
};

export default CustomerReviews;
