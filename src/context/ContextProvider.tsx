import React, {createContext, useState} from 'react';

interface Data {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export const Context = createContext<Data[]>([]);

export default function ContextProvider({children}) {
  const [data, setData] = useState<Data[]>([]);

  return <Context.Provider value={data}>{children}</Context.Provider>;
}
