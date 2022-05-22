import { Box, Heading, HStack, Image, Text } from '@chakra-ui/react';
import Header from '../components/Header';

const Home = () => {
  return (
    <Box>
      <Header />
      <HStack
        minH="100vh"
        px={[10, 20]}
        bg="blue.400"
        color="white"
        align="center"
        justify="space-around"
      >
        <Heading fontSize="3.5rem">
          <Text color="green.400">LEARN ON </Text>YOUR CLASS SCHEDULE
        </Heading>
        <Box>
          <Image src="/assets/student.png" objectFit="contain" />
        </Box>
      </HStack>
    </Box>
  );
};

export default Home;
