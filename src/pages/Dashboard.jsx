import { Box } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../components/Sidebar';

const Dashboard = () => {
  return (
    <Box>
      <Sidebar />
      Dashboard
      <Outlet/>
    </Box>
  );
};

export default Dashboard;
