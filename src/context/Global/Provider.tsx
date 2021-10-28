import { useState } from 'react';
import { CookiesProvider, useCookies } from 'react-cookie';
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
  const [cookies, setCookie, removeCookie] = useCookies(['credentials']);

  const loginApp = async (user: { email: string; password: string }) => {
    const data = await login(user);
    if (!data.message) {
      setUserData(data);

      history.push('feed');

      setCookie('credentials', data);

      return false;
    } else {
      return true;
    }
  };

  const requestPosts = async () => {
    const posts = await getAllPosts(userData || cookies.credentials);

    return posts.data;
  };

  const context = {
    loginApp,
    requestPosts,
    userData: userData || cookies.credentials,
    removeCookie,
  };

  return (
    <Context.Provider value={context}>
      <CookiesProvider>{children}</CookiesProvider>
    </Context.Provider>
  );
}
