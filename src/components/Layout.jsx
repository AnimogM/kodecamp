import {
  Box,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  useDisclosure,
} from '@chakra-ui/react';
import Header from './Header';
import Sidebar from './Sidebar';
const Layout = ({ children }) => {
  const { isOpen, onClose, onOpen } = useDisclosure();
  return (
    <Box>
      <Box display={['none', 'block']}>
        <Sidebar />
        <Box ml={['0', '200px']} p="5">
          {children}
        </Box>
      </Box>
      <Box display={['block', 'none']}>
        <Header onOpen={onOpen} />
        <Drawer placement="left" size="full" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent bg="blue.400">
            <DrawerCloseButton color="white" />
            <DrawerBody>
              <Sidebar />
            </DrawerBody>
          </DrawerContent>
        </Drawer>
        <Box p="5"> {children}</Box>
      </Box>
    </Box>
  );
};

export default Layout;
