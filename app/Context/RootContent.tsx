import React from "react";
import { SidebarProvider } from "./context";
import { ChatProvider } from "./ChatContext";
import { ApiProvider } from "./Api";

function RootContent({ children }: any) {
  return (
    <ApiProvider>
      <SidebarProvider>
        <ChatProvider>{children}</ChatProvider>
      </SidebarProvider>
    </ApiProvider>
  );
}

export default RootContent;
