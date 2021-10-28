import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import login from '../../apis/login';

import Context from './Context';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: AppProviderProps) {
  const history = useHistory();
  const [userData, setUserData] = useState({});

  const loginApp = async (user: { email: string; password: string }) => {
    const data = await login(user);
    console.log(data);

    if (!data.message) {
      setUserData(data);

      history.push('feed');
    }
  };

  const context = {
    loginApp,
    userData: userData,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
