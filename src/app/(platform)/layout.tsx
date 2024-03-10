import Filter from "@/components/Layout/Filter";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import React from "react";

//custom component

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {
  return (
    <div className="flex flex-col bg-white">
      <Header />
      <Filter />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default Layout;
