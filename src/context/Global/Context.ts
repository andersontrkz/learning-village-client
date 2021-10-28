import { createContext } from 'react';

type GlobalContext = {
  userData: any;
  loginApp: (user: any) => any;
  requestPosts: () => any;
  removeCookie: (cookie: any, options?: any) => any;
};

const Context = createContext<GlobalContext>({
  userData: {},
  loginApp: () => {},
  requestPosts: () => {},
  removeCookie: () => {},
});

export default Context;
