import { Button, Heading, VStack } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <VStack h="100vh" bg="gray.100" justify="center">
      <Heading>Oops, page not found</Heading>
      <Link to='/'>
        <Button mt="8" colorScheme="blue">Back Home</Button>
      </Link>
    </VStack>
  );
};

export default NotFound;
