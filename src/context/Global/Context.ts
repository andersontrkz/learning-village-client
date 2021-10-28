import { createContext } from 'react';

type GlobalContext = {
  userData: any;
  loginApp: (user: any) => void;
};

const Context = createContext<GlobalContext>({
  userData: {},
  loginApp: () => {},
});

export default Context;
