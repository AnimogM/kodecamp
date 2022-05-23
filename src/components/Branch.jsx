import { Box, HStack, Text, useBoolean } from '@chakra-ui/react';
import { FaPlus, FaMinus } from 'react-icons/fa';

const Branch = ({ element, intro }) => {
  const [show, setShow] = useBoolean();
  return (
    <Box mt="5">
      <HStack
        bg="gray.300"
        p="4"
        justify="space-between"
      >
        <Text fontWeight="bold"> {element}</Text>
        <Text
          fontWeight="light"
          onClick={setShow.toggle}
          cursor="pointer"
          transition="0.5s ease"
        >
          {show ? <FaMinus /> : <FaPlus />}
        </Text>
      </HStack>
      {show ? (
        <Text fontSize="sm" p="3" bg="gray.100">
          {intro}
        </Text>
      ) : (
        ''
      )}
    </Box>
  );
};

export default Branch;
