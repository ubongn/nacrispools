import { Box, Container, Heading, Text } from "@chakra-ui/react";
import React from "react";

export default function ContactAbout() {
  return (
    <Box mt="8" bg="gray.100">
      <Container maxW="90%" py="10">
        <Box>
          <Heading
            as="h5"
            fontFamily="Poppins"
            fontSize={{ base: "18 px", sm: "sm", md: "md" }}
            mb="2"
          >
            About Nacrispools Pools
          </Heading>
        </Box>
        <Box>
          <Text fontFamily="Poppins" fontSize={{ base: "13px", sm: "sm", md: "md" }}>
            Nacrispools has 9 years Experiance of pool building and
            construction. Nacrispools is involved in the construction of
            commercial and residential swimming pools as well as the renovation
            and repair of existing pools. We are also dealing in Pool Surround
            Equipment, Swimming Pool Cleaning Equipment, Under Water Light,
            Swimming Pool Furniture, Competition Equipment, Swimming Pool
            Chemical, Swimming Pool Inflatable, Life Saving Equipment, Counter
            Current Nozzle, Swimming Filteration Plant, Pool Pump, Pool Heater
            etc.
          </Text>
          <Text mt="3" fontFamily="Poppins" fontSize={{ base: "13px", sm: "sm", md: "md" }}>
            We are working hard to provide you with the excellent amount of
            resources in the form of various other kinds services in the field
            that will completely transform you with the superb perfection.
          </Text>
        </Box>
      </Container>
    </Box>
  );
}
