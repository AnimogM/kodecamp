import {
  Heading,
  Box,
  Avatar,
  VStack,
  Center,
  Text,
} from '@chakra-ui/react';
import Layout from '../components/Layout';
import { useUserAuth } from '../context/UserAuthContext';

const Profile = () => {
  const { user } = useUserAuth();
  console.log(user)
  return (
    <Layout>
      <Box>
        <Heading py={[3, 10]} color="blue" fontSize={['lg', '2xl']}>
          Profile Setting
        </Heading>
        <VStack spacing="5" bg="gray.50" maxW="full" w="320px" mx="auto" p="10">
          <Center>
            <Avatar
              size="xl"
              src={user?.photoURL}
            />
          </Center>
          <Text
            display="flex"
            flexDirection={['column', 'row']}
            gap="3"
            fontWeight="bold"
            align="center"
          >
            Name:{' '}
            <Text fontWeight={600}>
              {user?.displayName
                ? user?.displayName
                : localStorage.getItem('name')}
            </Text>
          </Text>
          <Text
            display="flex"
            flexDirection={['column', 'row']}
            gap="3"
            align="center"
            fontWeight="bold"
          >
            Email: <Text fontWeight={600}>{user?.email}</Text>
          </Text>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Profile;
