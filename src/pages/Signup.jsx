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
import { FaEnvelope, FaLock, FaUser } from 'react-icons/fa';

const Signup = () => {
  return (
    <Box px="20" minH="100vh" py="10" bg="gray.50">
      <Heading>Student Signup</Heading>
      <Text py="2">Create your account</Text>
      <SimpleGrid columns={[1, 2]} gap="20" alignItems="center">
        <Box textAlign="center">
          <Image src="/assets/takenote.svg" alt="background image" />
        </Box>
        <Box bg="">
          <Box maxW="200px" mx="auto" mb="3">
            <Image src="/assets/logo.png" alt="kodecamp" />
          </Box>
          <form>
            <VStack spacing="5">
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  variant="flushed"
                  borderBottomColor="gray.500"
                />
                <InputRightElement children={<FaUser color="blue" />} />
              </InputGroup>
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
                  borderBottomColor="gray.500"
                  placeholder="Password"
                  name="password"
                />
                <InputRightElement children={<FaLock color="blue" />} />
              </InputGroup>
              <InputGroup>
                <Input
                  type="password"
                  borderBottomColor="gray.500"
                  variant="flushed"
                  placeholder="Confirm Password"
                  name="confirmPassword"
                />
                <InputRightElement children={<FaLock color="blue" />} />
              </InputGroup>
              <Flex gap="3">
                Already have an account?
                <Link to="/login">
                  <Text color="blue.600">Login</Text>
                </Link>
              </Flex>
              <Button type="submit" size="lg" colorScheme="blue" w="full">
                Sign up
              </Button>
            </VStack>
          </form>
        </Box>
      </SimpleGrid>
    </Box>
  );
};

export default Signup;
