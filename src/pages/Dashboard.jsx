import { Heading, Stack, Image } from '@chakra-ui/react';
import Layout from '../components/Layout';
import { useUserAuth } from '../context/UserAuthContext';
const Dashboard = () => {
  const { user } = useUserAuth();
  return (
    <Layout>
      <Stack
        direction={['column', 'row']}
        bg="green.400"
        m={['1', '0']}
        p="5"
        rounded="lg"
        color="white"
        align="center"
      >
        <Heading
          fontSize={{ base: '1.5rem', md: '2.5rem', lg: '3.5rem' }}
          wordBreak="break-word"
        >
          Welcome {user?.displayName? user?.displayName: localStorage.getItem("name")}
        </Heading>
        <Image w="50%" alignSelf="center" src="/assets/read.svg" />
      </Stack>
    </Layout>
  );
};

export default Dashboard;
