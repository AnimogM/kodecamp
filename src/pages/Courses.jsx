import { Box, Center, Heading, SimpleGrid, Text } from '@chakra-ui/react';
import {motion} from "framer-motion"
import { Link } from 'react-router-dom';
import Layout from '../components/Layout';
import course from '../data';

const Courses = () => {
  return (
    <Layout>
      <Box>
        <Heading py={[3, 10]} fontSize={['lg', '2xl']} color="blue">
          Available Courses
        </Heading>
        <SimpleGrid columns={{ base: 1, md: '2', lg: 4 }} spacing="5">
          {course.map(item => {
            const { id, name, color } = item;
            return (
              <Link to={`/course/${id}`}>
                <Center
                  as={motion.div}
                  whileHover={{ scale: 1.05 }}
                  transition="0.5s ease"
                  key={id}
                  bg={color}
                  minH="100"
                  _hover={{ shadow: 'lg' }}
                  cursor="pointer"
                >
                  <Text fontSize="20" color="gray.200">
                    {name}
                  </Text>
                </Center>
              </Link>
            );
          })}
        </SimpleGrid>
      </Box>
    </Layout>
  );
};

export default Courses;
