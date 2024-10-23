import React, { useState } from "react";
import styled from "styled-components";

interface TabItem {
  id: number;
  label: string;
  content: string;
}

interface TabsProps {
  tabItems: TabItem[];
}

const Tabs: React.FC<TabsProps> = ({ tabItems }) => {
  const [activeTab, setActiveTab] = useState<number>(tabItems[0]?.id || 1);

  const handleTabClick = (id: number) => {
    setActiveTab(id);
  };

  return (
    <TabContainer>
      <TabHeader>
        {tabItems.map(tab => (
          <IsTapActive
            className={activeTab === tabItems[0]?.id ? "isActive" : ""}
          >
            <TabButton
              key={tab.id}
              isActive={tab.id === activeTab}
              onClick={() => handleTabClick(tab.id)}
            >
              {tab.label}
            </TabButton>
          </IsTapActive>
        ))}
      </TabHeader>
      <TabContent>
        {tabItems.find(tab => tab.id === activeTab)?.content}
      </TabContent>
    </TabContainer>
  );
};

// 스타일링
const TabContainer = styled.div`
  border: 1px solid #ddd;
  border-radius: 8px;
  padding: 1rem;
`;

const TabHeader = styled.div`
  display: flex;
  justify-content: space-around;
  font-size: 1rem;
`;

const TabButton = styled.button<{ isActive: boolean }>`
  flex: 1;
  padding: 1rem;
  background-color: ${({ isActive }) => (isActive ? "#000" : "#ddd")};
  color: ${({ isActive }) => (isActive ? "#fff" : "#000")};
  border: none;
  border-bottom: ${({ isActive }) => (isActive ? "2px solid #000" : "none")};
  cursor: pointer;
  font-weight: bold;

  &:hover {
    background-color: #ccc;
  }
`;

const TabContent = styled.div`
  padding: 2rem 0;
  font-size: 1.2rem;
  text-align: center;
`;

const IsTapActive = styled.div`
  width: 100%;
  text-align: center;
  color: var(--font-gray400);
  font-weight: bold;
  padding-bottom: 0.5rem;
  &.isActive {
    border-bottom: 1px solid black;
    color: black;
  }
`;

export default Tabs;
