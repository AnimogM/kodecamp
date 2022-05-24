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
  useBoolean,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope, FaUser } from 'react-icons/fa';
import { BiHide, BiShow } from 'react-icons/bi';
import { useUserAuth } from '../context/UserAuthContext';

const Signup = () => {
  const { signupDetails, handleSignupChange, signupError, handleSignup } =
    useUserAuth();
  const [show, setShow] = useBoolean();
  return (
    <Box px={{ base: '6', lg: '20' }} minH="100vh" py="10" bg="gray.50">
      <Heading>Student Signup</Heading>
      <Text py="2">Create your account</Text>
      <SimpleGrid columns={[1, 2]} gap="20" alignItems="center">
        <Box textAlign="center" display={['none', 'block']}>
          <Image src="/assets/takenote.svg" alt="background image" />
        </Box>
        <Box bg="">
          <Box maxW="200px" mx="auto" mb="3">
            <Image src="/assets/logo.png" alt="kodecamp" />
          </Box>
          <form onSubmit={handleSignup}>
            <VStack spacing="5">
              <InputGroup>
                <Input
                  type="text"
                  placeholder="Name"
                  name="name"
                  value={signupDetails.name}
                  onChange={handleSignupChange}
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
                  value={signupDetails.email}
                  onChange={handleSignupChange}
                  variant="flushed"
                  borderBottomColor="gray.500"
                />
                <InputRightElement children={<FaEnvelope color="blue" />} />
              </InputGroup>
              <InputGroup>
                <Input
                  type={show ? 'text' : 'password'}
                  variant="flushed"
                  borderBottomColor="gray.500"
                  placeholder="Password"
                  name="password"
                  value={signupDetails.password}
                  onChange={handleSignupChange}
                />
                <InputRightElement
                  onClick={setShow.toggle}
                  cursor="pointer"
                  children={
                    show ? <BiShow color="blue" /> : <BiHide color="blue" />
                  }
                />
              </InputGroup>
              {signupError ? (
                <Text color="red" alignSelf="start">
                  fields cannot be empty
                </Text>
              ) : (
                ''
              )}
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
