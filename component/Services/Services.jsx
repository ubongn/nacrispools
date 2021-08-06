import {
  Box,
  Center,
  Container,
  SimpleGrid,
  Square,
  Text,
} from "@chakra-ui/layout";
import React from "react";
import {
  GiConcreteBag,
  GiCrane,
  GiOpenChest,
  GiMonkeyWrench,
  GiShipWheel,
} from "react-icons/gi";

export default function Services() {
  return (
    <Container maxW={{ base:"100%",sm:"100%", md:"90%"}}>
      <Center>
        <Text
          as={"span"}
          color={"gray.400"}
          fontWeight={200}
          fontFamily="Poppins"
          fontSize={{ base: "24px", sm: "3xl", lg: "4xl" }}
        >
          OUR SERVICES
        </Text>
      </Center>
      <SimpleGrid columns={[2, null, 3]} spacing="40px" mt={10}>
        <Box
          p={5}
          _hover={{
            shadow: "md",
            borderWidth: "1px",
            flex: "1",
            borderRadius: "md",
            fontWeight: "semibold",
          }}
        >
          <Square border="4px" color="white">
            <GiConcreteBag size={40} color="gray" />
          </Square>

          <Text
            fontSize={{ base: "11px", sm: "sm", md: "md" }}
            fontFamily="Poppins"
            fontWeight="bold"
            textAlign="center"
            color={"#7A7CA8"}
          >
            Swimming Pool Construction
          </Text>
          <Text fontSize={{ base: "10px", sm: "sm", md: "md" }} textAlign="center" color={"#7A7CA8"}>
            We are among the prominent consultant for swimming pool
            construction.
          </Text>
        </Box>
        <Box
          p={5}
          _hover={{
            shadow: "md",
            borderWidth: "1px",
            flex: "1",
            borderRadius: "md",
            fontWeight: "semibold",
          }}
        >
          <Square border="4px" color="white">
            <GiCrane size={40} color="gray" />
          </Square>

          <Text
            fontSize={{ base: "11px", sm: "sm", md: "md" }}
            fontWeight="bold"
            fontFamily="Poppins"
            textAlign="center"
            color={"#7A7CA8"}
          >
            Swimming Pool Maintenance
          </Text>
          <Text fontSize={{ base: "10px", sm: "sm", md: "md" }} textAlign="center" color={"#7A7CA8"}>
            Let our trained proffessionals take care of all your pool and spa
            needs.
          </Text>
        </Box>
        <Box
          p={5}
          _hover={{
            shadow: "md",
            borderWidth: "1px",
            flex: "1",
            borderRadius: "md",
            fontWeight: "semibold",
          }}
        >
          <Square border="4px" color="white">
            <GiOpenChest size={40} color="gray" />
          </Square>

          <Text
            fontSize={{ base: "11px", sm: "sm", md: "md" }}
            fontWeight="bold"
            fontFamily="Poppins"
            textAlign="center"
            color={"#7A7CA8"}
          >
            Steam Sauna Products
          </Text>
          <Text fontSize={{ base: "10px", sm: "sm", md: "md" }} textAlign="center" color={"#7A7CA8"}>
            Equipped with sophisticated automation system, Steam and Sauna
            Products generates a pleasing level of heat that is skin friendly
            and healthy.
          </Text>
        </Box>
        <Box
          p={5}
          _hover={{
            shadow: "md",
            borderWidth: "1px",
            flex: "1",
            borderRadius: "md",
            fontWeight: "semibold",
          }}
        >
          <Square border="4px" color="white">
            <GiShipWheel size={40} color="gray" />
          </Square>

          <Text
            fontSize={{ base: "11px", sm: "sm", md: "md" }}
            fontWeight="bold"
            fontFamily="Poppins"
            textAlign="center"
            color={"#7A7CA8"}
          >
            Repair & Renovation
          </Text>
          <Text fontSize={{ base: "10px", sm: "sm", md: "md" }} textAlign="center" color={"#7A7CA8"}>
            To meet the variegated requirements of our customers, we are
            providing these Swimming Pool Repairing Services.
          </Text>
        </Box>
        <Box
          p={5}
          _hover={{
            shadow: "md",
            borderWidth: "1px",
            flex: "1",
            borderRadius: "md",
            fontWeight: "semibold",
          }}
        >
          <Square border="24px" color="white">
            <GiMonkeyWrench size={40} color="gray" />
          </Square>

          <Text
            fontSize={{ base: "11px", sm: "sm", md: "md" }}
            fontWeight="bold"
            fontFamily="Poppins"
            textAlign="center"
            color={"#7A7CA8"}
          >
            Jacuzzi Spa Products
          </Text>
          <Text fontSize={{ base: "10px", sm: "sm", md: "md" }} textAlign="center" color={"#7A7CA8"}>
            Available with us an assortment of Spa and Jacuzzi products that
            adds lavishness and rejuvenation to your bathroom.
          </Text>
        </Box>
      </SimpleGrid>
    </Container>
  );
}
