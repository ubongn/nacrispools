import {
  Box,
  Center,
  Container,
  Text,
  Image,
  SimpleGrid,
} from "@chakra-ui/react";
import React from "react";

export default function Project() {
  return (
    <>
      <Container
        maxW={{ sm: "100%", md: "90%" }}
        mt={10}
        align="center"
        justify="space-between"
      >
        <Center>
          <Text
            as={"span"}
            color={"gray.400"}
            fontWeight={300}
            fontFamily="Poppins"
            fontSize={{ base: "18px", sm: "3xl", lg: "4xl" }}
          >
            OUR RECENT PROJECTS
          </Text>
        </Center>
        <Box mt={8}>
          <SimpleGrid columns={[1, null, 3]} spacing="30px" mt={10}>
            <Image src="/latest/l2.jpg" alt="pool image" />
            <Image src="/latest/l4.jpg" alt="pool image" />
            <Image src="/latest/l8.jpg" alt="pool image" />
            <Image src="/latest/l16.jpg" alt="pool image" />
            <Image src="/latest/l17.jpg" alt="pool image" />
            <Image src="/latest/l20.jpg" alt="pool image" />
            <Image src="/latest/l1.jpg" alt="pool image" />
            <Image src="/latest/l7.jpg" alt="pool image2" />
            <Image src="/latest/l12.jpg" alt="pool image" />
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
