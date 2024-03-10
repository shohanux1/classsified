import React from "react";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = ({ children }: AuthLayoutProps) => {
  return (
    <div className="flex flex-col h-full">
      <Header />
      <div className="flex-1">{children}</div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
