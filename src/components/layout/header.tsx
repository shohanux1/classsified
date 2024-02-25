import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type HeaderProps = {
  button: boolean;
};

const Header = ({ button }: HeaderProps) => {
  return (
    <div className="border-b shadow-sm md:shadow-none">
      <div className="flex flex-col md:flex-row items-center gap-4 md:items-center justify-center md:justify-between max-w-5xl py-4 mx-auto px-4 w-full">
        <div className="space-y-0.5 md:text-start text-center">
          <Link className="text-3xl font-semibold text-primary" href={"/"}>
            Logo
          </Link>
          <h1 className="md:text-xs md:font-light text-slate-400 md:text-zinc-700 text-md font-medium">
            Skip the games. Get satisfaction.
          </h1>
        </div>

        {button && (
          <div className="w-full md:max-w-sm">
            <Link href={"/create-add"}>
              <Button className="font-bold w-full" size={"lg"}>
                Login / Signup
              </Button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
