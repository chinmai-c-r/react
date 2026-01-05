import { createContext, SetStateAction, useContext, useState } from "react";

type User =
  | {
      name: string;
      setName: React.Dispatch<SetStateAction<string>>;
    }
  | undefined;

const UserContext = createContext<User>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [name, setName] = useState("");
  return (
    <UserContext.Provider value={{ name, setName }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);

  if (context === undefined) {
    throw new Error("UserProvider not wrapped");
  }

  return context;
};
