import React from "react";
import Footer from "@/components/Layout/Footer";
import Header from "@/components/Layout/Header";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

type AuthLayoutProps = {
  children: React.ReactNode;
};

const AuthLayout = async ({ children }: AuthLayoutProps) => {
  const session = await getServerSession(authOptions);

  if (session) {
    redirect("/");
  }

  return <>{children}</>;
};

export default AuthLayout;
