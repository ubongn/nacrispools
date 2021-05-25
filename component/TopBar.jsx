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
        lineHeight="30px"
        fontSize={{ base: "sm", sm: "sm", md: "md" }}
        wrap="wrap"
        px="15"
        mx="auto"
        maxW="95%"
      >
        <Flex mt={1} wrap="wrap">
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
              <BreadcrumbLink
                href="/contact"
                _hover={{
                  textDecoration: "none",
                }}
              >
                <Button colorScheme="telegram" borderRadius="0">
                  Make An Appointment
                </Button>
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        </Box>
      </Flex>
    </>
  );
}
