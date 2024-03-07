import Filter from "@/components/layout/Filter";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
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
