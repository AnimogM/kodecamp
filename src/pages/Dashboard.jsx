import { Heading, HStack, Image } from '@chakra-ui/react';
import Layout from '../components/Layout'
const Dashboard = () => {
  return (
    <Layout>
      <HStack bg="green.400" p="5" rounded="lg" color="white">
        <Heading fontSize={['2rem', '3.5rem']}>Welcome Maryam Gomina</Heading>
        <Image w="50%" src="/assets/read.svg" />
      </HStack>
    </Layout>
  );
};

export default Dashboard;
