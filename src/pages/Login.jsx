import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  SimpleGrid,
  Text,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaLock } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';

const Login = () => {
  return (
    <Box px="20" py="10" bg="gray.50" minH="100vh">
      <Heading>Student Login</Heading>
      <Text py="2">make sure your account is secure</Text>
      <SimpleGrid columns={[1, 2]} gap="20" alignItems="center">
        <Box textAlign="center">
          <Image src="/assets/takenote.svg" alt="background image" />
        </Box>
        <Box>
          <Box maxW="200px" mx="auto" mb="3">
            <Image src="/assets/logo.png" alt="kodecamp" />
          </Box>
          <form>
            <VStack spacing="5">
              <Button
                type="button"
                w="full"
                display="flex"
                gap="5"
                size="lg"
                variant="outline"
                colorScheme="blue"
              >
                <FcGoogle fontSize="1.5rem" />{' '}
                <Text fontSize="1rem">Continue with Google</Text>
              </Button>
              <Text textDecoration="underline">Continue with email</Text>
              <InputGroup>
                <Input
                  type="email"
                  placeholder="Email"
                  name="email"
                  variant="flushed"
                  borderBottomColor="gray.500"
                />
                <InputRightElement children={<FaEnvelope color="blue" />} />
              </InputGroup>
              <InputGroup>
                <Input
                  type="password"
                  variant="flushed"
                  placeholder="Password"
                  name="password"
                  borderBottomColor="gray.500"
                />
                <InputRightElement children={<FaLock color="blue" />} />
              </InputGroup>
              <Flex gap="3">
                Don't have an account?
                <Link to="/signup">
                  <Text color="blue.600">Sign up</Text>
                </Link>
              </Flex>
              <Button type="submit" size="lg" colorScheme="blue" w="full">
                Login
              </Button>
            </VStack>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Login;
