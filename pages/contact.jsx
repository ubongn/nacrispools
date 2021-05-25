import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Image,
  Input,
  SimpleGrid,
  Stack,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";
import { PhoneIcon } from "@chakra-ui/icons";

export default function contact() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  async function onSubmitForm(values) {
    let config = {
      method: "post",
      url: `${process.env.NEXT_PUBLIC_API_URL}/api/contact`,
      headers: {
        "Content-Type": "application/json",
      },
      data: values,
    };

    try {
      const response = await axios(config);
      console.log(response);
      if (response.status == 200) {
        reset();
        toast(
          "success",
          "Thank you for contacting us, we will be in touch soon."
        );
      }
    } catch (err) {}
  }
  return (
    <>
      <Box>
        <Flex
          as="nav"
          alignItems="center"
          justifyContent="space-between"
          wrap="wrap"
          maxW="90%"
          mx="auto"
        >
          <Box mt="5">
            <Image src="images/logo1.svg" />
          </Box>
          <Box mt="5">
            <Box fontSize={{ base: "md", sm: "18", md: "20" }}>
              <PhoneIcon color="gray.400" margin={"2"} />
              +233 57 289 0312
            </Box>
            <Box fontSize={{ base: "md", sm: "18", md: "20" }}>
              <PhoneIcon color="gray.400" margin={"2"} />
              +234 706 566 3620
            </Box>
          </Box>
        </Flex>
      </Box>

      <Container
        maxW="95%"
        p={50}
        bgImage="url('/images/banner4.jpg')"
        bgSize={"cover"}
        bgRepeat="no-repeat"
        bgPosition="center"
      >
        <Box
          maxW={{ base:"3x1", sm: "3x1", md: "md" }}
          mx="auto"
          mt={4}
          bg="#fff"
          border="1px"
          borderRadius={9}
          borderColor="gray.200"
        >
          <Center mt={6}>
            <Text
              bgGradient="linear(to-l, #7928CA,#FF0080)"
              bgClip="text"
              fontSize={{ base: "18", sm: "20", md: "26" }}
              fontWeight="bold"
            >
              Book Appointment
            </Text>
          </Center>
          <Box p={6}>
            <form onSubmit={handleSubmit(onSubmitForm)}>
              <FormControl id="name" isRequired>
                <FormLabel fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                  Name
                </FormLabel>
                <Input
                  type="text"
                  name="name"
                  {...register("name", {
                    required: {
                      value: true,
                      message: "You must enter your name",
                    },
                  })}
                />
                <span> {errors?.name?.message}</span>
              </FormControl>
              <FormControl id="email" isRequired>
                <FormLabel fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                  Email
                </FormLabel>
                <Input
                  type="text"
                  name="email"
                  {...register("email", {
                    required: {
                      value: true,
                      message: "You must enter your email address",
                    },
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "This needs to be a valid email address",
                    },
                  })}
                />
                <span> {errors?.email?.message}</span>
              </FormControl>
              <FormControl id="city" isRequired>
                <FormLabel fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                  City
                </FormLabel>
                <Input
                  type="text"
                  name="city"
                  {...register("city", {
                    required: {
                      value: true,
                      message: "You must enter your city",
                    },
                  })}
                />
                <span> {errors?.city?.message}</span>
              </FormControl>
              <FormControl id="phone" isRequired>
                <FormLabel fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                  Phone
                </FormLabel>
                <Input
                  type="text"
                  name="phone"
                  {...register("phone", {
                    required: {
                      value: true,
                      message: "You must enter your phone number",
                    },
                  })}
                />
                <span> {errors?.phone?.message}</span>
              </FormControl>
              <FormControl id="message" isRequired>
                <FormLabel fontSize={{ base: "sm", sm: "md", md: "lg" }}>
                  Message
                </FormLabel>
                <Textarea
                  name="message"
                  {...register("message", {
                    required: {
                      value: true,
                      message: "You must enter your message",
                    },
                  })}
                />
                <span> {errors?.message?.message}</span>
              </FormControl>

              <Button
                mt="4"
                colorScheme="blue"
                type="submit"
                fontSize={{ base: "sm", sm: "md", md: "lg" }}
              >
                Send Request
              </Button>
            </form>
          </Box>
        </Box>
      </Container>

      <Container maxW={"90%"} mt={8}>
        <Center>
          <Text
            as={"span"}
            color={"gray.400"}
            fontWeight={300}
            fontSize={"3xl"}
          >
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
      <Box mt="8" bg="gray.100">
        <Container maxW="90%" py="10">
          <Box>
            <Heading
              as="h5"
              fontSize={{ base: "18 px", sm: "sm", md: "md" }}
              mb="2"
            >
              About Nacrispools Pools
            </Heading>
          </Box>
          <Box>
            <Text fontSize={{ base: "13px", sm: "sm", md: "md" }}>
              Nacrispools has 8+ years Experiance of pool building and
              construction. Nacrispools is involved in the construction of
              commercial and residential swimming pools as well as the
              renovation and repair of existing pools. We are also dealing in
              Pool Surround Equipment, Swimming Pool Cleaning Equipment, Under
              Water Light, Swimming Pool Furniture, Competition Equipment,
              Swimming Pool Chemical, Swimming Pool Inflatable, Life Saving
              Equipment, Counter Current Nozzle, Swimming Filteration Plant,
              Pool Pump, Pool Heater etc.
            </Text>
            <Text mt="3" fontSize={{ base: "13px", sm: "sm", md: "md" }}>
              We are working hard to provide you with the excellent amount of
              resources in the form of various other kinds services in the field
              that will completely transform you with the superb perfection.
            </Text>
          </Box>
        </Container>
      </Box>
      <Box background="#010517" bgSize={"cover"} w="100%">
        <Container
          as={Stack}
          maxW={"6xl"}
          wrap="wrap"
          py={4}
          direction={{ base: "column", md: "row" }}
          spacing={4}
          justify={{ base: "center", md: "center" }}
          align={{ base: "center", md: "center" }}
        >
          <Text
            textColor="whiteAlpha.600"
            fontSize={{ base: "13px", sm: "sm", md: "md" }}
          >
            © 2021 Bakorlabs. All rights reserved
          </Text>
        </Container>
      </Box>
    </>
  );
}
