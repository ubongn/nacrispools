import {
    Container,
    Stack,
    Flex,
    Box,
    Heading,
    Text,
    Image,
    Icon,
    useColorModeValue,
  } from "@chakra-ui/react";
  
  export default function Intro() {
    return (
      <Container maxW={{sm:"100%", md:"90%"}} mt={-10}>
        <Stack
          align={"center"}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 20, md: 28 }}
          direction={{ base: "column", md: "row" }}
        >
          <Stack flex={1} spacing={{ base: 5, md: 10 }}>
            <Heading
              lineHeight={1.1}
              fontWeight={400}
              fontSize={{ base: "2xl", sm: "2xl", lg: "3xl" }}
            >
              <Text as={"span"} letterSpacing={8}>
                WELCOME!
              </Text>
              <br />
              <Text
                as={"span"}
                color={"gray.400"}
                fontWeight={200}
                fontSize={{ base: "18px", sm: "3xl", lg: "4xl" }}
              >
                Nacris Pools
              </Text>
              <br />
              <Text
                as={"span"}
                color={"#7A7CA8"}
                fontSize={{ base: "15px", sm: "2xl", lg: "3xl" }}
              >
                We Are Swimming Pool Service Experts
              </Text>
            </Heading>
            <Text color={"gray.400"} fontFamily="Poppins" fontSize={{ base: "13px", sm: "sm", md: "md" }}>
              Nacris Pools is involved in the construction of commercial, semi
              commercial and residential swimming pools as well as the renovation
              and repair of existing pools. We are also dealing in Pool Surround
              Equipment, Swimming Pool Cleaning Equipment, Under Water Light,
              Swimming Pool Furniture, Competition Equipment, Swimming Pool
              Chemical, Swimming Pool Inflatable, Life Saving Equipment, Counter
              Current Nozzle, Swimming Filteration Plant, Pool Pump, Pool Heater
              etc.
            </Text>
          </Stack>
          <Flex
            flex={1}
            justify={"center"}
            align={"center"}
            position={"relative"}
            w={"full"}
          >
            <Blob
              w={"150%"}
              h={"150%"}
              position={"absolute"}
              top={"-20%"}
              left={0}
              zIndex={-1}
              color={useColorModeValue("gray.50", "gray.400")}
            />
            <Box
              position={"relative"}
              height={"300px"}
              rounded={"2xl"}
              boxShadow={"2xl"}
              width={"full"}
              overflow={"hidden"}
              borderRadius={"none"}
            >
              <Image
                alt={"About Image"}
                align={"center"}
                w={"100%"}
                h={"100%"}
                src={"images/pool1_400.jpg"}
              />
            </Box>
          </Flex>
        </Stack>
      </Container>
    );
  }
  
  export const Blob = (props) => {
    return (
      <Icon
        width={"100%"}
        viewBox="0 0 578 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M239.184 439.443c-55.13-5.419-110.241-21.365-151.074-58.767C42.307 338.722-7.478 282.729.938 221.217c8.433-61.644 78.896-91.048 126.871-130.712 34.337-28.388 70.198-51.348 112.004-66.78C282.34 8.024 325.382-3.369 370.518.904c54.019 5.115 112.774 10.886 150.881 49.482 39.916 40.427 49.421 100.753 53.385 157.402 4.13 59.015 11.255 128.44-30.444 170.44-41.383 41.683-111.6 19.106-169.213 30.663-46.68 9.364-88.56 35.21-135.943 30.551z"
          fill="currentColor"
        />
      </Icon>
    );
  };
  