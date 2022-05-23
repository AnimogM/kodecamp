import {
  Box,
  Heading,
  HStack,
  Image,
  Text,
  Button,
  VStack,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Box
      h="100vh"
      bg="blue.300"
      bgImg='url("/assets/student.png")'
      bgRepeat="no-repeat"
      bgPosition="right"
    >
      <HStack shadow="lg"
        align="center"
        justify="space-between"
        px={[10, 20]}
        py="5"
        bg="white"
      >
        <Image
          src="/assets/kodecamp.png"
          alt="logo"
          objectFit="contain"
        />
        <Button variant="solid" colorScheme="green" px="8" mr="5">
          <Link to="/login">Login</Link>
        </Button>
      </HStack>
      <VStack
        px={[10, 20]}
        color="white"
        align="start"
        h="300px"
        justify="center"
      >
        <Heading fontSize="3.5rem">
          <Text color="purple">LEARN ON </Text>YOUR CLASS SCHEDULE
        </Heading>
      </VStack>
    </Box>
  );
};

export default Home;
