import { Box, Flex, Text } from "@chakra-ui/react";
import React from "react";
import SimpleLineChart from "../components/Charts/LineChart";
import StackedAreaChart from "../components/Charts/StackedAreaChart";

const Dashboard = () => {
  return (
    <>
      <h3>DASHBOARD</h3>
      <Flex justifyContent={"space-between"}>
        <Box>
          {/* <Text>MONTHLY SALES</Text> */}
          <SimpleLineChart />
        </Box>
        <Box ml="10px">
          <StackedAreaChart />
        </Box>
      </Flex>
    </>
  );
};

export default Dashboard;
