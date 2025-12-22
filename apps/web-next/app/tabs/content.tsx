import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type TabContext = {
  activeTab: string;
  setActiveTab: Dispatch<SetStateAction<string>>;
};

const TabsContext = createContext<TabContext | undefined>(undefined);

export const TabsProvider = ({ children }: { children: React.ReactNode }) => {
  const [activeTab, setActiveTab] = useState<string>("");
  return (
    <TabsContext.Provider value={{ activeTab, setActiveTab }}>
      {children}
    </TabsContext.Provider>
  );
};

export const useTabs = () => {
  const context = useContext(TabsContext);

  if (context === undefined) throw new Error("Tabs provider not wrapped");

  return context;
};
