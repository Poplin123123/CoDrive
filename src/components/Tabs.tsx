import { ReactNode, SyntheticEvent } from "react";
import { Box, Tab, Breakpoint, styled, Tabs } from "@mui/material";
import { CoDriverTheme } from "@/theme/light";

interface IProps {
  changeTab: (value: string) => void;
  activeTab: string;
  tabList: string[];
}

function TabsSection({ changeTab, activeTab, tabList }: IProps) {
  function handleTabsChange(event: SyntheticEvent, tabsValue: string) {
    changeTab(tabsValue);

    return event;
  }

  return (
    <TabsWrapper
      onChange={handleTabsChange}
      value={activeTab}
      allowScrollButtonsMobile
      variant="scrollable"
    >
      {Object.values(tabList).map((tab) => (
        <Tab
          key={tab}
          value={tab}
          label={tab}
          sx={{
            fontWeight: 600,
          }}
        />
      ))}
    </TabsWrapper>
  );
}

export default TabsSection;

const TabsWrapper = styled(Tabs)(({ theme }: CoDriverTheme) => ({
  "& .MuiTabs-scroller": {
    overflow: "auto",
  },

  [theme?.breakpoints.up("md") as Breakpoint]: {
    "& .MuiTabs-scrollable": {
      overflowX: "auto",
    },
  },
}));
