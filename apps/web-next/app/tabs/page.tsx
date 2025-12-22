"use client";
import { Tab, TabContent, TabList, Tabs } from "./components";

function TabsComp() {
  return (
    <Tabs>
      <TabList>
        <Tab id="1">Tab 1</Tab>
        <Tab id="2">Tab 2</Tab>
        <Tab id="3">Tab 3</Tab>
      </TabList>
      <TabContent id="1">Content 1</TabContent>
      <TabContent id="2">Content 2</TabContent>
      <TabContent id="3">Content 3</TabContent>
    </Tabs>
  );
}

export default TabsComp;
