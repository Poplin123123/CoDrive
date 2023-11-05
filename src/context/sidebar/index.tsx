import { useState, createContext, ReactNode, useContext } from "react";

interface ISidebarContext {
  sidebarToggle: boolean;
  toggleSidebar: () => void;
}

const defaults: ISidebarContext = {
  sidebarToggle: false,
  toggleSidebar: () => {
    return;
  },
};

const SidebarContext = createContext(defaults);

interface IProps {
  children: ReactNode;
}

function SidebarProvider({ children }: IProps) {
  const [sidebarToggle, setSidebarToggle] = useState(false);
  const toggleSidebar = () => {
    setSidebarToggle(!sidebarToggle);
  };

  return (
    <SidebarContext.Provider value={{ sidebarToggle, toggleSidebar }}>
      {children}
    </SidebarContext.Provider>
  );
}

const useSidebarContext = () => {
  const context = useContext(SidebarContext);
  if (!context) {
    throw new Error("useSidebarContext must be used within a SidebarProvider");
  }

  return context;
};

export { useSidebarContext, SidebarProvider };
