import { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';

const useAuth = () => {
  const authUtils = useContext(AuthContext);

  return authUtils;
};

export default useAuth;
