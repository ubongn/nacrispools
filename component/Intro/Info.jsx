import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export default function Info() {
  return (
    <>
      <Box
        mt={10}
        bgImage="linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url('/images/bg1.jpg')"
        bgSize={"cover"}
        // bgGradient={'linear(to-r, blackAlpha.600, transparent)'}
        bgRepeat="no-repeat"
        bgOpacity="50%"
        //  bg="black"

        // bg="rgba(0, 0, 0, 0.3)"
        w="100%"
        h="400px"
      >
        <Box
          w={"full"}
          align={"center"}
          justify={"center"}
          px={useBreakpointValue({ base: 4, md: 8 })}
        >
          <Box maxW={"2xl"} align={"flex-start"} spacing={6} pt={10}>
            <Text
              pt={10}
              lineHeight={1.2}
              color={"#fff"}
              fontFamily="Poppins"
              fontWeight={400}
              fontSize={{ base: "lg", sm: "2xl", lg: "4xl" }}
            >
              Please Feel Free To Contact Us
            </Text>
            <Box
              pt={10}
              color={"#fff"}
              fontFamily="Poppins"
              fontWeight="semibold"
              fontSize={{ base: "18px", sm: "2xl", lg: "2xl" }}
            >
              <Text> Hotline: +233 57 289 0312</Text>
              <Text> Hotline: +234 706 566 3620</Text>
              <Text>Mail Address: info@nacrispools.com</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
