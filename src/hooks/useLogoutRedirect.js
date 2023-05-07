import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';

export const useLogoutRedirect = () => {
  const navigate = useNavigate();
  const isLoggedIn = useSelector(state => state.login.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate('/login', { replace: true });
    }
  }, [isLoggedIn, navigate]);
};
