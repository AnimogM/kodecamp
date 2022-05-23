import { Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Courses from './pages/Courses';
import Profile from './pages/Profile';
import Course from './pages/Course';
import NotFound from './pages/NotFound';

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />

      <Route path="/dashboard" element={<Dashboard />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/course/:id" element={<Course />} />

      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
