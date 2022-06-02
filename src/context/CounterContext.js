//1-criando o context
import { createContext, useState } from 'react';

export const CounterContext = createContext();

//2 - criando o provider
export const CounterContextProvider = ({ children }) => {
  const [counter, setCounter] = useState(100);

  return (
    <CounterContext.Provider value={{ counter, setCounter }}>
      {children}
    </CounterContext.Provider>
  );
};
