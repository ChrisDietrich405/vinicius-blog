import { createContext, useState } from "react";
import { ReactNode } from "react";

interface User {
  email: string;
  name: string;
}

interface UserProviderInterface {
  children: ReactNode;
}

export const UserContext = createContext({});

export const UserProvider = ({ children }: UserProviderInterface) => {
  const [user, setUser] = useState<User | null>(null);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
