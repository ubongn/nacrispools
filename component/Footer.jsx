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
  const ListHeader = ({ children }) => {
    return (
      <Text
        fontWeight={"500"}
        fontSize={{ sm: "sm", lg: "lg" }}
        mb={2}
        textColor={"white"}
      >
        {children}
      </Text>
    );
  };

  return (
    <>
      <Box background="#2f344e" bgSize={"cover"} w="100%" h="300px"  position="relative">
        <Container maxW={"80%"} mx="auto">
          <SimpleGrid columns={[1, null, 3]} spacing="30px" mt={10}>
            <Box mt={10}>
              <Box>
                <Image src="images/logo1.svg" w="40" h="20" />
              </Box>
              <Box textColor="white">
                <PhoneIcon w={3} h={3} color="gray.400" margin={"2"} />
                +233 57 289 0312
              </Box>
              <Box textColor="white">
                <PhoneIcon w={3} h={3} color="gray.400" margin={"2"} />
                +234 706 566 3620
              </Box>
              <Box textColor="white">
                <EmailIcon color="gray.400" margin={"2"} />
                info@nacrispools.com
              </Box>
            </Box>
            <Box py={10} ml={20} mt={5}>
              <Stack align={"flex-start"}>
                <ListHeader>Recent Post</ListHeader>
                <Link
                  href={"#"}
                  textColor={"#337ab7"}
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("#7A7CA8"),
                  }}
                >
                  Home
                </Link>
                <Link
                  href={"#"}
                  textColor={"#337ab7"}
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
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("#7A7CA8"),
                  }}
                >
                  Services
                </Link>
                <Link
                  href={"#"}
                  textColor={"#337ab7"}
                  _hover={{
                    textDecoration: "none",
                    color: useColorModeValue("#7A7CA8"),
                  }}
                >
                  Contact
                </Link>
              </Stack>
            </Box>
            <Box py={10} ml={20} mt={5}>
              <Stack align={"flex-start"}>
                <ListHeader>Get News</ListHeader>
                <Stack align={"flex-start"}>
                  <Text textColor="white">Subscribe for latest news</Text>
                  <Stack direction={"row"}>
                    <Input
                      placeholder={"Your email address"}
                      bg={useColorModeValue("blackAlpha.100", "whiteAlpha.100")}
                      border={0}
                      _focus={{
                        bg: "whiteAlpha.300",
                      }}
                    />
                    <IconButton
                      bg={useColorModeValue("blue.400", "blue.800")}
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
