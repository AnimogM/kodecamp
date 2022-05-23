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
      <HStack
        shadow="lg"
        align="center"
        justify="space-between"
        px={{ base: 2, md: 10, lg: 20 }}
        py={[3, 5]}
        bg="white"
      >
        <Image src="/assets/kodecamp.png" alt="logo" objectFit="contain" />
        <Button variant="solid" colorScheme="green" mr="5">
          <Link to="/login">Login</Link>
        </Button>
      </HStack>
      <VStack
        px={[10, 20]}
        color="white"
        align="start"
        h="80vh"
        justify="center"
      >
        <Heading display="inline" fontSize={{ base: '2rem', lg: '3.5rem' }}>
          <Text color="purple" display="inline">
            LEARN ON YOUR
          </Text>{' '}
          CLASS SCHEDULE
        </Heading>
      </VStack>
    </Box>
  );
};

export default Home;
