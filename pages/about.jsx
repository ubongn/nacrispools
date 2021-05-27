import Layout from "../Layout/layout";
import React from "react";
import {
  Box,
  Container,
  Flex,
  Image,
  Link,
  Text,
  useColorModeValue,
  Stack,
  Heading,
} from "@chakra-ui/react";

export default function about() {
  return (
    <Layout>
      <Box
        padding="150px 0 0"
        mb="30px"
        pos="relative"
        bgImage="url('/images/bg3.jpg')"
        bgPos="center"
        bgSize="cover"
        bgRepeat="no-repeat"
      >
        <Container
          maxW={{ sm: "100%", md: "90%" }}
          pr="30px"
          pl="30px"
          mr="auto"
          ml="auto"
        >
          <Flex
            align="center"
            justify="space-between"
            bg="#f5f5f5"
            p="28px"
            mb="-50"
            pos="relative"
          >
            <Box>
              <Text
                fontSize="28px"
                fontWeight="bold"
                letterSpacing="0.5px"
                color="#7A7CA8"
                lineHeight="28px"
              >
                About Us
              </Text>
            </Box>
            <Flex>
              <Link
                href="/"
                mx="2"
                _hover={{
                  textDecoration: "none",

                  color: useColorModeValue("#7A7CA8"),
                }}
              >
                Home
              </Link>
              |
              <Link
                mx="2"
                href="#"
                color="#7A7CA8"
                _hover={{
                  textDecoration: "none",
                }}
              >
                About
              </Link>
            </Flex>
          </Flex>
        </Container>
      </Box>

      <Container maxW={{ sm: "100%", md: "90%" }}>
        <Stack
          spacing={{ base: 8, md: 8 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Box
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
          >
            <Image alt={"About Image"} src={"gallery/mission.jpg"} />
          </Box>
          <Stack flex={1} spacing={{ base: 3, md: 5 }}>
            <Heading
              lineHeight={1}
              color="#7A7CA8"
              fontWeight={400}
              fontSize={{ base: "2xl", sm: "2xl", lg: "3xl" }}
            >
              Our Mission
            </Heading>
            <Text
              color={"gray.900"}
              letterSpacing={1}
              fontSize={{ base: "13px", sm: "sm", md: "md" }}
            >
              Nacris Pools is involved in the construction of commercial, semi
              commercial and residential swimming pools as well as the
              renovation and repair of existing pools. We are also dealing in
              Pool Surround Equipment, Swimming Pool Cleaning Equipment, Under
              Water Light, Swimming Pool Furniture, Competition Equipment,
            </Text>
            <Text
              color={"gray.900"}
              letterSpacing={1}
              fontSize={{ base: "13px", sm: "sm", md: "md" }}
            >
              With the help and support of our esteemed and distinguished team
              we are working towards to bring out the luxurious swimming pools
              for our clients in the most innovative manner.
            </Text>
          </Stack>
        </Stack>
      </Container>
      <Container maxW={{ sm: "100%", md: "90%" }} mt="-9">
        <Stack
          spacing={{ base: 8, md: 8 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 3, md: 5 }}>
            <Heading
              lineHeight={1}
              color="#7A7CA8"
              fontWeight={400}
              fontSize={{ base: "2xl", sm: "2xl", lg: "3xl" }}
            >
              Our Vision
            </Heading>
            <Text
              mb="2"
              color={"gray.900"}
              letterSpacing={1}
              fontSize={{ base: "13px", sm: "sm", md: "md" }}
            >
              We are working towards to impart our durable services with
              complete satisfaction to your desires and aim to build a great
              dream pool for yourself in the most innovative and unique manner..
            </Text>
          </Stack>
          <Box
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
          >
            <Image alt={"vision Image"} src={"gallery/vision2.jpg"} />
          </Box>
        </Stack>
      </Container>
    </Layout>
  );
}
