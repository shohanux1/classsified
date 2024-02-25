import Filter from "@/components/layout/filter";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import React from "react";

//custom component

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white">
      <Header button />
      <Filter />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
