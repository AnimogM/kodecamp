import { Box, Heading, VStack } from '@chakra-ui/react';
import Header from '../components/Header';
import Img from '../assets/student.png';

const Home = () => {
  return (
    <Box
      h="100vh"
      bg="blue.300"
      bgImg={`url("${Img}")`}
      bgRepeat="no-repeat"
      bgPosition="right"
    >
      <Header />
      <VStack
        px={[10, 20]}
        color="white"
        align="start"
        h="80vh"
        justify="center"
      >
        <Heading color="orange" fontSize={{ base: '2rem', lg: '3.5rem' }}>
          LEARN ON YOUR <br/> CLASS SCHEDULE
        </Heading>
      </VStack>
    </Box>
  );
};

export default Home;
