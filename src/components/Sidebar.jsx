import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBook, FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { BsGridFill } from 'react-icons/bs';
import { useUserAuth } from '../context/UserAuthContext';

const items = [
  { name: 'dashboard', icon: <BsGridFill />, path: '/dashboard' },
  { name: 'courses', icon: <FaBook />, path: '/courses' },
  { name: 'profile', icon: <FaUser />, path: '/profile' },
  { name: 'logout', icon: <BiLogOut />, path: '/' },
];
const Sidebar = () => {
  const { logout } = useUserAuth();
  return (
    <VStack
      align={['center', 'start']}
      py="10"
      spacing="5"
      h="100vh"
      bg="blue.400"
      color="white"
      pos={['static', 'fixed']}
      left="0"
      w={['full', '200px']}
    >
      <VStack align="center" w="full">
        <Image
          src="/assets/logo.png"
          alt="kodecamp"
          bg="white"
          rounded="full"
          w="100px"
          objectFit="contain"
          h="100px"
        />
      </VStack>

      <Link to="/dashboard">
        <HStack
          _hover={{ bg: 'blue.800', roundedRight: 'lg' }}
          spacing="5"
          w={['full', '200px']}
          px="6"
          py="3"
        >
          <BsGridFill fontSize="1.1rem" />
          <Text textTransform="capitalize">dashboard</Text>
        </HStack>
      </Link>
      <Link to="/courses">
        <HStack
          _hover={{ bg: 'blue.800', roundedRight: 'lg' }}
          spacing="5"
          w={['full', '200px']}
          px="6"
          py="3"
        >
          <FaBook fontSize="1.1rem" />
          <Text textTransform="capitalize">courses</Text>
        </HStack>
      </Link>
      <Link to='/profile'>
        <HStack
          _hover={{ bg: 'blue.800', roundedRight: 'lg' }}
          spacing="5"
          w={['full', '200px']}
          px="6"
          py="3"
        >
          <FaUser fontSize="1.1rem" />
          <Text textTransform="capitalize">profile</Text>
        </HStack>
      </Link>
      <Link to="/">
        <HStack
          onClick={logout}
          _hover={{ bg: 'blue.800', roundedRight: 'lg' }}
          spacing="5"
          w={['full', '200px']}
          px="6"
          py="3"
        >
          <BiLogOut fontSize="1.1rem" />
          <Text textTransform="capitalize">logout</Text>
        </HStack>
      </Link>
    </VStack>
  );
};

export default Sidebar;
