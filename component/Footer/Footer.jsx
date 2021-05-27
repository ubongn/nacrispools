import { EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import {
  Box,
  Container,
  IconButton,
  Image,
  Input,
  Link,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import React from "react";
import { BiMailSend } from "react-icons/bi";
import FooterCopyright from "./FooterCopyright";

export default function Footer() {
  return (
    <>
      <Box background="#2f344e" bgSize={"cover"} w="100%" h="350px">
        <Container maxW={{ sm: "100%", md: "88%" }} mx="auto">
          <SimpleGrid columns={[2, 2, 3]} spacing={{ base: 9, sm: 10 }} mt={10}>
            <Box mt={10}>
              <Box>
                <Image
                  src="images/logo1.svg"
                  w={{ base: 20, sm: 40 }}
                  h={{ base: 10, sm: 20 }}
                />
              </Box>
              <Box
                textColor="white"
                fontSize={{ base: "12px", sm: "13px", md: "md" }}
              >
                <PhoneIcon w={3} h={3} color="gray.400" margin={"2"} />
                +233 57 289 0312
              </Box>
              <Box
                textColor="white"
                fontSize={{ base: "11.5px", sm: "13px", md: "md" }}
              >
                <PhoneIcon w={3} h={3} color="gray.400" margin={"2"} />
                +234 706 566 3620
              </Box>
              <Box
                textColor="white"
                fontSize={{ base: "10.5px", sm: "13px", md: "md" }}
              >
                <EmailIcon color="gray.400" margin={"2"} />
                info@nacrispools.com
              </Box>
            </Box>
            <Box py={15} mt={10} ml="10">
              <Stack justifyContent="center">
                <Text
                  fontWeight={"500"}
                  fontSize={{ base: "12px", sm: "sm", md: "lg" }}
                  textColor={"white"}
                >
                  Recent Post
                </Text>
                <Link
                  href={"/"}
                  textColor={"#337ab7"}
                  fontSize={{ base: "13px", sm: "sm", md: "md" }}
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("#7A7CA8"),
                  }}
                >
                  Home
                </Link>
                <Link
                  href={"/about"}
                  textColor={"#337ab7"}
                  fontSize={{ base: "13px", sm: "sm", md: "md" }}
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("#7A7CA8"),
                  }}
                >
                  About
                </Link>
                <Link
                  href={"#"}
                  textColor={"#337ab7"}
                  fontSize={{ base: "13px", sm: "sm", md: "md" }}
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("#7A7CA8"),
                  }}
                >
                  Pool Gallery
                </Link>
                <Link
                  href={"#"}
                  textColor={"#337ab7"}
                  fontSize={{ base: "13px", sm: "sm", md: "md" }}
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("#7A7CA8"),
                  }}
                >
                  Services
                </Link>
                <Link
                  href={"/contact"}
                  textColor={"#337ab7"}
                  fontSize={{ base: "13px", sm: "sm", md: "md" }}
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("#7A7CA8"),
                  }}
                >
                  Contact
                </Link>
              </Stack>
            </Box>
            <Box py={19}  mt={{base:"-14", md:"10"}} >
              <Stack align={"flex-start"}>
                <Text
                  fontWeight={"500"}
                  fontSize={{ base: "12px", sm: "sm", md: "lg" }}
                  textColor={"white"}
                >
                  Get News
                </Text>
                <Stack align={"flex-start"}>
                  <Text
                    textColor="white"
                    fontSize={{ base: "10px", sm: "16px", md: "md" }}
                  >
                    Subscribe for latest news
                  </Text>
                  <Stack direction={"row"}>
                    <Input
                      placeholder={"Your email address"}
                      bg={useColorModeValue("white", "whiteAlpha.100")}
                      border={0}
                      _focus={{
                        bg: "whiteAlpha.300",
                      }}
                    />
                    <IconButton
                      bg={useColorModeValue("gray.400", "blue.800")}
                      color={useColorModeValue("white", "gray.800")}
                      _hover={{
                        bg: "blue.600",
                      }}
                      aria-label="Subscribe"
                      icon={<BiMailSend />}
                    />
                  </Stack>
                </Stack>
              </Stack>
            </Box>
          </SimpleGrid>
        </Container>
      </Box>
      <FooterCopyright />
    </>
  );
}
