import { Box, Container, Stack, Text } from "@chakra-ui/react";
import React from "react";

export default function ContactFooter() {
  return (
    <Box background="#010517" bgSize={"cover"} w="100%">
      <Container
        as={Stack}
        maxW={"6xl"}
        wrap="wrap"
        py={4}
        direction={{ base: "column", md: "row" }}
        spacing={4}
        justify={{ base: "center", md: "center" }}
        align={{ base: "center", md: "center" }}
      >
        <Text
          fontFamily="Poppins"
          textColor="whiteAlpha.600"
          fontSize={{ base: "13px", sm: "sm", md: "md" }}
        >
         © Nacrispools, 2022.
        </Text>
      </Container>
    </Box>
  );
}
