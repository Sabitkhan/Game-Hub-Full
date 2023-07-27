import { Box } from "@chakra-ui/react";
import React from "react";
import { Outlet } from "react-router-dom";
import NavBar from "../components/NavBar";

const layout = () => {
  return (
    <div>
      <NavBar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </div>
  );
};

export default layout;
