import { Box, Center, Container, Image, SimpleGrid, Text } from "@chakra-ui/react";
import React from "react";

export default function Offer() {
  return (
    <Container maxW={"90%"} mt={8}>
      <Center>
        <Text as={"span"} color={"gray.400"} fontWeight={300} fontSize={"3xl"}>
          We Offer
        </Text>
      </Center>
      <SimpleGrid columns={[2, 3, 6]} spacing={10} mt={10}>
        <Box>
          <Image src="images/Clinics.png" />
          <Text fontSize={{ base: "14px", sm: "sm", md: "md" }}>
            Pool Designing & Construction
          </Text>
        </Box>
        <Box>
          <Image src="images/2.png" />
          <Text fontSize={{ base: "14px", sm: "sm", md: "md" }}>
            Pool Repair & Renovation
          </Text>
        </Box>

        <Box fontSize={{ base: "14px", sm: "sm", md: "md" }}>
          <Image src="images/3.png" />
          <Text>Water Proofing / Water Treatment</Text>
        </Box>

        <Box>
          <Image src="images/4.png" />
          <Text fontSize={{ base: "14px", sm: "sm", md: "md" }}>
            Jacuzzi And Other Related Work
          </Text>
        </Box>
        <Box>
          <Image src="images/5.png" />
          <Text fontSize={{ base: "14px", sm: "sm", md: "md" }}>
            SPA'S/ SAUNA/STEAM
          </Text>
        </Box>
        <Box>
          <Image src="images/6.png" />
          <Text fontSize={{ base: "14px", sm: "sm", md: "md" }}>
            Private Pools For Farm Houses
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
