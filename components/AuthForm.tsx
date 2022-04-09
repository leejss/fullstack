import { auth } from "../lib/mutation";
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
} from "@chakra-ui/react";
import { useRouter } from "next/router";
import type { FC } from "react";
import { useForm } from "react-hook-form";
import type { SubmitHandler } from "react-hook-form";

type Inputs = {
  email: string;
  password: string;
};

interface AuthFormProps {
  mode: "signin" | "signup";
}

const AuthForm: FC<AuthFormProps> = ({ mode }) => {
  const router = useRouter();
  const {
    handleSubmit,
    register,
    formState: { isSubmitting, errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = async (inputs) => {
    try {
      await auth(mode, inputs);
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Box h="100vh" w="100vw" bg="black" color="white">
      <Flex justify="center" align="center" h="100px">
        <Heading as="h1" size="xl">
          LOGO
        </Heading>
      </Flex>
      <Flex justify="center" align="center" h="calc(100vh - 100px)">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormControl isInvalid={!!errors.email}>
            <FormLabel htmlFor="email">Email</FormLabel>
            <Input
              id="email"
              placeholder="Email"
              type="email"
              {...register("email", {
                required: "This is required",
              })}
            />
            <FormErrorMessage>
              {errors.email && errors.email.message}
            </FormErrorMessage>
          </FormControl>
          <FormControl isInvalid={!!errors.password}>
            <FormLabel htmlFor="password">Password</FormLabel>
            <Input
              id="password"
              placeholder="password"
              type="password"
              {...register("password", {
                required: "This is required",
              })}
            />
            <FormErrorMessage>
              {errors.password && errors.password.message}
            </FormErrorMessage>
          </FormControl>
          <Button
            mt={4}
            w="100%"
            type="submit"
            isLoading={isSubmitting}
            bg="green.500"
            sx={{
              "&:hover": {
                bg: "green.300",
              },
            }}
          >
            {mode === "signin" ? "Signin" : "Signup"}
          </Button>
        </form>
      </Flex>
    </Box>
  );
};

export default AuthForm;
