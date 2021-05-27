import { PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  Flex,
  HStack,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import React from "react";

export default function ContactHeader() {
  return (
    <Container maxW="95%" mx="auto">
      <HStack
        as="nav"
        align="center"
        justifyContent="space-between"
        wrap="wrap"
        display="flex"
      >
        <Link mt="5" href="/">
          <Image src="images/logo1.svg" w="40" h="20" />
        </Link>
        <Box mt="5">
          <Box fontSize={{ base: "md", sm: "16", md: "18" }}>
            <PhoneIcon color="gray.400" margin={"2"} />
            +233 57 289 0312
          </Box>
          <Box fontSize={{ base: "md", sm: "16", md: "18" }}>
            <PhoneIcon color="gray.400" margin={"2"} />
            +234 706 566 3620
          </Box>
        </Box>
      </HStack>
    </Container>
  );
}
