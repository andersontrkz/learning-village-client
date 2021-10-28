import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import login from '../../apis/login';
import { getAllPosts } from '../../apis/post';

import Context from './Context';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: AppProviderProps) {
  const history = useHistory();
  const [userData, setUserData] = useState(false);

  const loginApp = async (user: { email: string; password: string }) => {
    const data = await login(user);
    if (!data.message) {
      setUserData(data);

      history.push('feed');

      return false;
    } else {
      return true;
    }
  };

  const requestPosts = async () => {
    const posts = await getAllPosts(userData);

    return posts.data;
  };

  const context = {
    loginApp,
    requestPosts,
    userData,
  };

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
