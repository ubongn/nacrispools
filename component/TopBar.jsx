import {
  Box,
  Button,
  Flex,
  useColorModeValue,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import React from "react";
import { PhoneIcon, EmailIcon } from "@chakra-ui/icons";

export default function TopBar() {
  return (
    <>
      <Flex
        align="center"
        justify="space-between"
        flex={{ base: 1 }}
        lineHeight="40px"
        fontSize="14"
        wrap="wrap"
        px="15"
        mx="auto"
        maxW="90%"
      >
        <Flex mt={1}>
          <Box>
            <PhoneIcon w={3} h={3} color="gray.400" margin={"2"} />
            +233 57289 0312 
          </Box>
          <Box>
            <PhoneIcon w={3} h={3} color="gray.400" margin={"2"} />
            +234 706566 3620
          </Box>
          <Box>
            <EmailIcon color="gray.400" margin={"2"} />
            info@nacrispools.com
          </Box>
        </Flex>

        <Box>
          <Breadcrumb separator="|">
            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                mx="2"
                color={useColorModeValue("#000")}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("#7A7CA8"),
                }}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <BreadcrumbLink
                href="#"
                mx="2"
                color={useColorModeValue("#000")}
                _hover={{
                  textDecoration: "none",
                  color: useColorModeValue("#7A7CA8"),
                }}
              >
                About
              </BreadcrumbLink>
            </BreadcrumbItem>

            <BreadcrumbItem>
              <Button colorScheme="telegram" borderRadius="0">
                Make An Appointment
              </Button>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
    </>
  );
}
