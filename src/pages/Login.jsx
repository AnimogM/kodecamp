import {
  Alert,
  AlertIcon,
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
  useBoolean,
  VStack,
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { FaEnvelope } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';
import { BiHide, BiShow } from 'react-icons/bi';
import { useUserAuth } from '../context/UserAuthContext';
import Logo from '../assets/logo.png';
import Img from '../assets/takenote.svg';

const Login = () => {
  const {
    loginDetails,
    signupSucess,
    handleLoginChange,
    loginError,
    login,
    googleSignin,
  } = useUserAuth();
  const [show, setShow] = useBoolean();
  return (
    <Box px={{ base: '6', lg: '20' }} py="10" bg="gray.50" minH="100vh">
      <Heading>Student Login</Heading>
      <Text py="2">make sure your account is secure</Text>
      <SimpleGrid columns={[1, 2]} gap="20" alignItems="center">
        <Box textAlign="center" display={['none', 'block']}>
          <Image src={Img} alt="background image" />
        </Box>
        <Box>
          <Box maxW="200px" mx="auto" mb="3">
            <Image src={Logo} alt="kodecamp" />
          </Box>
          <form onSubmit={login}>
            <VStack spacing="5">
              {signupSucess && (
                <Alert status="success">
                  <AlertIcon />
                  Account created successfully, login!
                </Alert>
              )}
              <Button
                onClick={googleSignin}
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
                  value={loginDetails.email}
                  onChange={handleLoginChange}
                  variant="flushed"
                  borderBottomColor="gray.500"
                />
                <InputRightElement children={<FaEnvelope color="blue" />} />
              </InputGroup>
              <InputGroup>
                <Input
                  type={show ? 'text' : 'password'}
                  variant="flushed"
                  placeholder="Password"
                  name="password"
                  value={loginDetails.password}
                  onChange={handleLoginChange}
                  borderBottomColor="gray.500"
                />
                <InputRightElement
                  onClick={setShow.toggle}
                  cursor="pointer"
                  children={
                    show ? <BiShow color="blue" /> : <BiHide color="blue" />
                  }
                />
              </InputGroup>
              {loginError && (
                <Alert status="error" alignSelf="start">
                  <AlertIcon />
                  {loginError}
                </Alert>
              )}
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
