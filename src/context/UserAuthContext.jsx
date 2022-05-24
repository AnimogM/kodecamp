import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { auth } from '../firebase';

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const [loginError, setLoginError] = useState(false);
  const [signupError, setSignupError] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [signupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  const handleSignup = e => {
    e.preventDefault();

    if (signupDetails.email && signupDetails.password && signupDetails.name) {
      setSignupError(false);
    } else {
      setSignupError(true);
    }
  };

  const handleLogin = e => {
    e.preventDefault();

    if (loginDetails.email && loginDetails.password) {
      setLoginError(false);
    } else {
      setLoginError(true);
    }
  };

  const handleSignupChange = e => {
    const { name, value } = e.target;
    setSignupDetails(prev => ({ ...prev, [name]: value }));
  };

  const handleLoginChange = e => {
    const { name, value } = e.target;
    setLoginDetails(prev => ({ ...prev, [name]: value }));
  };
  const signup = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };
  return (
    <UserAuthContext.Provider
      value={{
        signup,
        login,
        handleSignup,
        handleLogin,
        loginDetails,
        signupDetails,
        handleSignupChange,
        handleLoginChange,
        loginError,
        signupError,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export default UserAuthContextProvider;

export const useUserAuth = () => {
  return useContext(UserAuthContext);
};
