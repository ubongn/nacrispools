import { Box, Text, useBreakpointValue } from "@chakra-ui/react";
import React from "react";

export default function Info() {
  return (
    <>
      <Box
        mt={10}
        bgImage="url('/images/bg1.jpg')"
        bgSize={"cover"}
        bgRepeat="no-repeat"
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
              color={"whiteAlpha.900"}
              fontWeight={400}
              fontSize={{ base: "1", sm: "3xl", lg: "4xl" }}
            >
              Please Feel Free To Contact Us
            </Text>
            <Box
              pt={10}
              fontSize={{ base: "1", sm: "2xl", lg: "2xl" }}
            >
              <Text color={"white"}> Hotline: +233 57 289 0312</Text>
              <Text color={"white"}>Mail Address: info@nacrispools.com</Text>
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
