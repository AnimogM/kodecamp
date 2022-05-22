import { Box, Button, HStack, Image } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const Header = (props) => {
  return (
    <Box shadow="md">
      <HStack align="center" justify="space-between " p="5">
        <Image src="/assets/kodecamp.png" alt="logo" objectFit="contain" />
        <Button variant="solid" colorScheme="green" px="8" mr="5">
          <Link to="/login">Login</Link>
        </Button>
      </HStack>
    </Box>
  );
};

export default Header;
