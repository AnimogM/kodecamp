import { Box, Heading, Text, VStack, useBoolean } from '@chakra-ui/react';
import { useParams } from 'react-router-dom';
import Branch from '../components/Branch';
import Layout from '../components/Layout';
import course from '../data';

const Course = () => {
  const { id } = useParams();

  const singleCourse = course.filter(item => item.id === id);
  return (
    <Layout>
      {singleCourse.map(item => {
        const {
          name,
          details: { intro, branches },
        } = item;
        return (
          <Box>
            <Heading color="blue">Introduction to {name}</Heading>
            <Text py="4" textAlign="justify">
              {intro}
            </Text>
            <Heading fontSize="20">Branches</Heading>
            <Box>
              {branches.map(element => (
                <Branch
                  key={element}
                  element={element}
                  intro={intro}
                />
              ))}
            </Box>
          </Box>
        );
      })}
    </Layout>
  );
};

export default Course;
