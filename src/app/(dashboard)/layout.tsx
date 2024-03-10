import Header from "@/components/Layout/Header";
import React from "react";

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1 bg-red-100 ">{children}</div>
    </div>
  );
};

export default DashboardLayout;
