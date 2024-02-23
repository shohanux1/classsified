import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Header = () => {
  return (
    <div className="flex flex-col md:flex-row items-start gap-4 md:items-center justify-between max-w-5xl py-4 mx-auto px-4 w-full">
      <div className="space-y-0.5">
        <Link className="text-3xl font-semibold text-primary" href={"/"}>
          Logo
        </Link>
        <h1 className="text-xs font-light text-zinc-700">
          Skip the games. Get satisfaction.
        </h1>
      </div>

      <div className="w-full md:max-w-sm">
        <Button className="w-full" size={"lg"}>
          Login / Signup
        </Button>
      </div>
    </div>
  );
};

export default Header;
