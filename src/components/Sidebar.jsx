import { Box } from '@chakra-ui/react';
import { FaHamburger, FaBook, FaUser } from 'react-icons/fa';
import { BiLogOut, BiNotepad } from 'react-icons/bi';
const Sidebar = () => {
  const items = [
    { name: 'dashboard', icon: <FaHamburger />, path: '/dashboard' },
    { name: 'courses', icon: <FaBook />, path: '/dashboard/courses' },
    { name: 'resources', icon: <BiNotepad />, path: '/dashboard/resoures' },
    { name: 'profile', icon: <FaUser />, path: '/dashboard/profile' },
    { name: 'logout', icon: <BiLogOut />, path: '/' },
  ];
  return <Box>Sidebar</Box>;
};

export default Sidebar;
