import React, { Fragment } from "react";

import Card from "../components/Review/Card";

import { Container, Text, Grid } from "@chakra-ui/react";
import { reviewData } from "../data";

const CustomerReviews = () => {
  return (
    <Container maxW={"1300px"}>
      <Text my="28px" fontSize={"4xl"} fontWeight="medium" align="center">
        CUSTOMER{" "}
        <span style={{ color: "rgb(223, 28, 28)", fontWeight: "bold" }}>
          REVIEWS!!
        </span>
      </Text>
      <Grid templateColumns="repeat(3, 1fr)" gap={4}>
        {reviewData.map(({ id, name, handle, rating, comment }) => (
          <Fragment key={id}>
            <Card
              name={name}
              handle={handle}
              rating={rating}
              comment={comment}
              section
            />
          </Fragment>
        ))}
      </Grid>
    </Container>
  );
};

export default CustomerReviews;
