import {
  Box,
  Button,
  Center,
  FormControl,
  FormLabel,
  Input,
  Text,
  Textarea,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
import axios from "axios";
import React from "react";

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
    <Box p={50}>
      <Center>
        <Text
          bgGradient="linear(to-l, #7928CA,#FF0080)"
          bgClip="text"
          fontSize={26}
          fontWeight="bold"
        >
          Book Appointment
        </Text>
      </Center>
      <Box
        maxW="sm"
        mx="auto"
        mt={6}
        border="1px"
        borderRadius={9}
        borderColor="gray.200"
      >
        <Box p={6}>
          <form onSubmit={handleSubmit(onSubmitForm)}>
            <FormControl id="name" isRequired>
              <FormLabel>Name</FormLabel>
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
              <FormLabel>Email</FormLabel>
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
              <FormLabel>City</FormLabel>
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
              <FormLabel>Phone</FormLabel>
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
              <FormLabel>Message</FormLabel>
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

            <Button mt="4" colorScheme="blue" type="submit">
              Send Request
            </Button>
          </form>
        </Box>
      </Box>
    </Box>
  );
}
