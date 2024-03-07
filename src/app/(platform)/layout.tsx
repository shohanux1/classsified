import React from "react";

import Header from "@/components/layout/Header";
import Filter from "@/components/layout/Filter";
import Footer from "@/components/layout/Footer";

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
