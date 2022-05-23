import { Box } from '@chakra-ui/react';
import Sidebar from './Sidebar';
const Layout = ({ children }) => (
  <Box>
    <Box display={['none', 'block']}>
      <Sidebar />
      <Box ml={['0', '200px']} p="5">
        {children}
      </Box>
    </Box>
    <Box display={['block', 'none']}>
      
    </Box>
  </Box>
);

export default Layout;
