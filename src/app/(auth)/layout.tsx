import React from "react";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default AuthLayout;
