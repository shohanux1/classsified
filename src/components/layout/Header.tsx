import React from "react";
import Link from "next/link";
import { Button } from "../ui/button";
import { getServerSession } from "next-auth";
import SignOut from "../custom/SignOut";
import { authOptions } from "@/lib/auth";

const Header = async () => {
  const session = await getServerSession(authOptions);

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

        {session?.user ? (
          <div>
            <h1 className="text-slate-800 transition-all hover:underline hover:text-primary cursor-pointer">
              {session?.user.email}
            </h1>
            <div className="flex items-center  space-x-2 text-sm ">
              <Link
                className="text-slate-600 transition-all hover:underline hover:text-primary"
                href={"/"}
              >
                your account
              </Link>
              <div className="h-3 w-0.5 bg-slate-500"></div>
              <SignOut />
            </div>
          </div>
        ) : (
          <div className="w-full md:max-w-sm">
            <Link href={"/create-ad"}>
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
