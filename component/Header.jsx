import React from "react";
import {
  Box,
  Text,
  Flex,
  Image,
  Link,
  useColorModeValue,
  IconButton,
  useDisclosure,
} from "@chakra-ui/react";
import TopBar from "./TopBar";
import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";

const Header = () => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <>
      <TopBar />
      <Box>
        <Flex
          as="nav"
          align="center"
          justify="space-between"
          fontSize={19}
          wrap="wrap"
          maxW="90%"
          mx="auto"
          py={{ base: 2 }}
          px={{ base: 4 }}
        >
          <Flex
          flex={{ base: 1, md: "auto" }}
          ml={{ base: -2 }}
          display={{ base: "flex", md: "none" }}
        >
          <IconButton
            onClick={onToggle}
            icon={
              isOpen ? <CloseIcon w={4} h={4} /> : <HamburgerIcon w={7} h={7} />
            }
            variant={"ghost"}
            aria-label={"Toggle Navigation"}
          />
        </Flex>
          <Flex justify={{ base: "center", sm: "start", md: "start" }}>
            <Image src="images/logo1.svg" w="40" h="20" />
          </Flex>

          <Box
            //wrap="wrap"
            display={{ sm: isOpen ? "block" : "none", md: "flex" }}
            width={{ sm: "full", md: "auto" }}
          >
            <Link
              mt={{ base: 4, md: 0 }}
              display="block"
              mr={6}
              color={useColorModeValue("#333333")}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("#7A7CA8"),
              }}
            >
              WHAT WE DO
            </Link>
            <Link
              mr={6}
              mt={{ base: 4, md: 0 }}
              display="block"
              color={useColorModeValue("#333333")}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("#7A7CA8"),
              }}
            >
              COMMERCIAL POOLS
            </Link>
            <Link
              mr={6}
              mt={{ base: 4, md: 0 }}
              display="block"
              color={useColorModeValue("#333333")}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("#7A7CA8"),
              }}
            >
              POOLS GALLERY
            </Link>
            <Link
              mr={6}
              mt={{ base: 4, md: 0 }}
              display="block"
              color={useColorModeValue("#333333")}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("#7A7CA8"),
              }}
            >
              SERVICES
            </Link>
            <Link
              mr={6}
              mt={{ base: 4, md: 0 }}
              display="block"
              color={useColorModeValue("#333333")}
              _hover={{
                textDecoration: "none",
                color: useColorModeValue("#7A7CA8"),
              }}
            >
              CONTACT
            </Link>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Header;
