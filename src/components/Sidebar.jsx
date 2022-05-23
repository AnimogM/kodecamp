import { HStack, Image, Text, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { FaBook, FaUser } from 'react-icons/fa';
import { BiLogOut } from 'react-icons/bi';
import { BsGridFill } from 'react-icons/bs';
const Sidebar = () => {
  const items = [
    { name: 'dashboard', icon: <BsGridFill />, path: '/dashboard' },
    { name: 'courses', icon: <FaBook />, path: '/courses' },
    { name: 'profile', icon: <FaUser />, path: '/profile' },
    { name: 'logout', icon: <BiLogOut />, path: '/' },
  ];
  return (
    <VStack
      align="start"
      py="10"
      spacing="5"
      h="100vh"
      bg="blue.400"
      color="white"
      pos="fixed"
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
      {items.map(item => {
        return (
          <Link to={item.path} key={item.name}>
            <HStack
              align={item.name === 'logout' ? 'end' : 'center'}
              alignContent={item.name === 'logout' ? 'end' : ''}
              _hover={{ bg: 'blue.800', roundedRight: 'lg' }}
              spacing="5"
              w={['full', '250px']}
              px="6"
              py="3"
            >
              <Text fontSize="1.1rem">{item.icon}</Text>
              <Text textTransform="capitalize">{item.name}</Text>
            </HStack>
          </Link>
        );
      })}
    </VStack>
  );
};

export default Sidebar;
