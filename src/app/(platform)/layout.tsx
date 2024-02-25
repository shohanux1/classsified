import Filter from "@/components/layout/filter";
import Footer from "@/components/layout/footer";
import Header from "@/components/layout/header";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

//custom component

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="bg-white">
      <Header
        button={
          <div className="w-full md:max-w-sm">
            <Link href={"/create-ad"}>
              <Button className="font-bold w-full" size={"lg"}>
                Login / Signup
              </Button>
            </Link>
          </div>
        }
      />
      <Filter />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
