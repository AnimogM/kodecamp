import { HStack, Image, Button, Box } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import { useUserAuth } from '../context/UserAuthContext';

const Header = ({ onOpen }) => {
  const { user } = useUserAuth();
  return (
    <HStack
      shadow="lg"
      align="center"
      justify="space-between"
      px={{ base: 2, md: 10, lg: 20 }}
      py={[3, 5]}
      bg="white"
    >
      <Image src="/assets/kodecamp.png" alt="logo" objectFit="contain" />
      <Link to="/login">
        <Button
          display={ [user? 'none': 'block', 'block']}
          variant="solid"
          colorScheme="green"
          mr="5"
        >
          Login
        </Button>
      </Link>
      {user ? (
        <Box display={['block', 'none']}>
          <BiMenu size={25} cursor="pointer" onClick={onOpen} />
        </Box>
      ) : (
        ''
      )}
    </HStack>
  );
};

export default Header;
