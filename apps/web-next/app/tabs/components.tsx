import React from "react";
import { TabsProvider, useTabs } from "./content";

export const Tabs = ({ children }: { children: React.ReactNode }) => {
  return (
    <TabsProvider>
      <div className="flex flex-col p-2">{children}</div>
    </TabsProvider>
  );
};

export const TabList = ({ children }: { children: React.ReactNode }) => {
  return <div className="flex flex-row gap-2">{children}</div>;
};

export const Tab = ({
  children,
  id,
}: {
  children: React.ReactNode;
  id: string;
}) => {
  const { activeTab, setActiveTab } = useTabs();
  return (
    <button
      id={id}
      className={`px-2 py-1 rounded-md ${activeTab == id ? "bg-amber-400" : "bg-white"} text-black`}
      onClick={() => {
        setActiveTab(id);
      }}
    >
      {children}
    </button>
  );
};

export const TabContent = ({
  children,
  id,
  className,
}: {
  children: React.ReactNode;
  id: string;
  className?: string;
}) => {
  const { activeTab } = useTabs();

  if (id == activeTab) {
    return <div className={`flex flex-row mt-2 ${className}`}>{children}</div>;
  }

  return null;
};
