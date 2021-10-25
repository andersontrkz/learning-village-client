import { createContext } from 'react';

type GlobalContext = null;

const Context = createContext<GlobalContext>(null);

export default Context;
