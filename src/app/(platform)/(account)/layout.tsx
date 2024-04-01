import React from "react";
import Sidebar from "./components/Sidebar";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = async ({ children }: Props) => {
  return (
    <div className="min-h-full flex max-w-5xl mx-auto px-4">
      <Sidebar />
      <div className="p-4 w-full">{children}</div>
    </div>
  );
};

export default DashboardLayout;
