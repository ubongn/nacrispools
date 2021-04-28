import { Box } from "@chakra-ui/layout";
import React from "react";

export default function Layout() {
  return (
    <>
      <Box>
        <Box
          margin="auto"
          width={{ sm: "full", md: "80em", lg: "full" }}
          minH="100vh"
        >
          {children}
        </Box>
      </Box>
    </>
  );
}
