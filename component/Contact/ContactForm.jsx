import {
  Box,
  Button,
  Center,
  Container,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";

export default function ContactForm() {
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
    <Container
      maxW="95%"
      p={50}
      bgImage="url('/images/banner4.jpg')"
      bgSize={"cover"}
      bgRepeat="no-repeat"
      bgPosition="center"
    >
      <Box
        maxW={{ base: "3x1", sm: "3x1", md: "md" }}
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
            fontFamily="Poppins"
            fontSize={{ base: "18", sm: "20", md: "26" }}
            fontWeight="bold"
          >
            Book Appointment
          </Text>
        </Center>
        <Box p={6}>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <FormControl id="name" isRequired>
              <FormLabel fontFamily="Poppins" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
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
              <FormLabel fontFamily="Poppins" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
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
              <FormLabel fontFamily="Poppins" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
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
              <FormLabel fontFamily="Poppins" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
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
              <FormLabel fontFamily="Poppins" fontSize={{ base: "sm", sm: "md", md: "lg" }}>
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
              fontFamily="Poppins"
              fontSize={{ base: "sm", sm: "md", md: "lg" }}
            >
              Send Request
            </Button>
          </form>
        </Box>
      </Box>
    </Container>
  );
}
