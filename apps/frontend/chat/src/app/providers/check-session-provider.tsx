import { type FC, type ReactNode, useEffect } from 'react';
import { useNavigate } from 'react-router';

import { getSessionStoreSelector, useSessionStore } from '@/entities';

interface ICheckSessionProviderProps {
  children: ReactNode;
}

export const CheckSessionProvider: FC<ICheckSessionProviderProps> = ({ children }) => {
  const navigate = useNavigate();
  const { fetchCheckSession } = useSessionStore(getSessionStoreSelector);

  useEffect(() => {
    fetchCheckSession().then((response) => {
      if(!response) {
        navigate('/sign-in');
      }
    })
      .catch((error) => {
        console.error(error);
        navigate('/sign-in');
      });
  }, [fetchCheckSession, navigate]);


  return children;
};
