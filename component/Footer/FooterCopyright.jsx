import {
  Box,
  chakra,
  Container,
  Stack,
  Text,
  useColorModeValue,
  VisuallyHidden,
} from "@chakra-ui/react";
import React from "react";
import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

export default function FooterCopyright() {
  const SocialButton = ({ children, label, href }) => {
    return (
      <chakra.button
        bg={useColorModeValue("whiteAlpha.500")}
        rounded={"full"}
        w={8}
        h={8}
        cursor={"pointer"}
        as={"a"}
        href={href}
        display={"inline-flex"}
        alignItems={"center"}
        justifyContent={"center"}
        transition={"background 0.3s ease"}
        _hover={{
          bg: useColorModeValue("blackAlpha.200", "whiteAlpha.200"),
        }}
      >
        <VisuallyHidden>{label}</VisuallyHidden>
        {children}
      </chakra.button>
    );
  };
  return (
    <>
      <Box background="#010517" bgSize={"cover"} w="100%">
        <Container
          as={Stack}
          fontFamily="Poppins"
          maxW="6xl"
          wrap="wrap"
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "space-between" }}
          align={{ base: "center", md: "center" }}
        >
          <Text textColor="whiteAlpha.600" fontSize={{ base: "13px", sm: "sm", md: "md" }}>
            © Nacrispools, 2022.
          </Text>
          <Stack direction={"row"} spacing={6}>
            {/* <SocialButton label={"Twitter"} href={"#"}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={"Facebook"} href={"#"}>
              <FaFacebook />
            </SocialButton> */}
            <SocialButton label={"Instagram"} href="/instagram.com/nacrispools/">
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </>
  );
}
