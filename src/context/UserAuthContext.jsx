import { createContext, useContext, useEffect, useState } from 'react';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
  signInWithPopup,
} from 'firebase/auth';
import { auth } from '../firebase';
import { useNavigate } from 'react-router-dom';

const UserAuthContext = createContext();

const UserAuthContextProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState({});
  const [loginError, setLoginError] = useState('');
  const [signupError, setSignupError] = useState('');
  const [signupSucess, setSignupSucess] = useState(false);
  const [loginDetails, setLoginDetails] = useState({ email: '', password: '' });
  const [signupDetails, setSignupDetails] = useState({
    name: '',
    email: '',
    password: '',
  });

  // const signup = (email, password) => {
  //   return createUserWithEmailAndPassword(auth, email, password);
  // };

  // const login = (email, password) => {
  //   return signInWithEmailAndPassword(auth, email, password);
  // };
  const signup = async e => {
    e.preventDefault();
    setSignupError('');

    try {
      await createUserWithEmailAndPassword(
        auth,
        signupDetails.email,
        signupDetails.password
      );
      setSignupDetails({
        name: '',
        email: '',
        password: '',
      });
      navigate('/login');
      setSignupSucess(true);
    } catch (err) {
      setSignupError(err.message);
    }
  };

  const login = async e => {
    e.preventDefault();
    setLoginError('');

    try {
      await signInWithEmailAndPassword(
        auth,
        loginDetails.email,
        loginDetails.password
      );
      setLoginDetails({ email: '', password: '' });
      setSignupSucess(false);
      navigate('/dashboard');
    } catch (err) {
      setLoginError(err.message);
    }
  };

  const googleSignin = async e => {
    e.preventDefault()
    const googleAuthProvider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, googleAuthProvider);
      navigate('/dashboard')
    } catch (err) {
      setLoginError(err.message);
    }
  };
  const logout = async () => {
    try {
      await signOut(auth);
    } catch (err) {
      console.log(err.message);
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

  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
    });

    return () => {
      unsubcribe();
    };
  }, []);
  return (
    <UserAuthContext.Provider
      value={{
        user,
        signup,
        login,
        googleSignin,
        logout,
        loginDetails,
        signupDetails,
        handleSignupChange,
        handleLoginChange,
        loginError,
        signupError,
        signupSucess,
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
