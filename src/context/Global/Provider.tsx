import Context from './Context';

type AppProviderProps = {
  children: React.ReactNode;
};

export default function Provider({ children }: AppProviderProps) {
  const context = null;

  return <Context.Provider value={context}>{children}</Context.Provider>;
}
