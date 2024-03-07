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
    <div className="bg-white">
      <Header />
      <Filter />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
