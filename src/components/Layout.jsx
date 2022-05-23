import { Box } from '@chakra-ui/react';
import Sidebar from './Sidebar'
const Layout = ({ children }) => (
  <Box>
    <Sidebar />
    <Box ml="250px" p="5">
      {children}
    </Box>
  </Box>
);

export default Layout;
