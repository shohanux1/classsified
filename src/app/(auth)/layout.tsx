import React from "react";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";

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
