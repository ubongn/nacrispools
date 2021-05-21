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
      <Container maxW={"90%"} mt={10}  align="center" justify="space-between">
        <Center>
          <Text
            as={"span"}
            color={"gray.400"}
            fontWeight={300}
            fontSize={{ base: "18px", sm: "3xl", lg: "4xl" }}
          >
            OUR RECENT PROJECTS
          </Text>
        </Center>
        <Box mt={8}>
          <SimpleGrid columns={[1, null, 3]} spacing="30px" mt={10}>
            <Image src="/gallery/pic1.jpg" alt="pool image" />
            <Image src="/gallery/pic2.jpg" alt="pool image2" />
            <Image src="/gallery/pic5.jpg" alt="pool image" />
            <Image src="/gallery/pic4.jpg" alt="pool image" />
            <Image src="/gallery/pic3.jpg" alt="pool image" />
            <Image src="/gallery/pic6.jpg" alt="pool image" />
            <Image src="/gallery/pic7.jpg" alt="pool image" />
            <Image src="/gallery/pic13.jpg" alt="pool image" />
            <Image src="/gallery/pic14.jpg" alt="pool image" />
          </SimpleGrid>
        </Box>
      </Container>
    </>
  );
}
