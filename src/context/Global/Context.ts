import { createContext } from 'react';

type GlobalContext = {
  userData: any;
  loginApp: (user: any) => any;
  requestPosts: () => any;
};

const Context = createContext<GlobalContext>({
  userData: {},
  loginApp: () => {},
  requestPosts: () => {},
});

export default Context;
