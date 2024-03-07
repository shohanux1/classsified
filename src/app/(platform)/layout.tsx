import Filter from "@/components/layout/Filter";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import React from "react";

//custom component

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = async ({ children }: LayoutProps) => {
  return (
    <div className="bg-white">
      <Header />
      <Filter />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
