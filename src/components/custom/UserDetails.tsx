import Link from "next/link";
import React from "react";
import SignOut from "./SignOut";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

const UserDetails = async () => {
  const session = await getServerSession(authOptions);

  return (
    <div>
      <h1 className="text-slate-800 transition-all hover:underline hover:text-primary cursor-pointer">
        {session?.user.email}
      </h1>
      <div className="flex items-center justify-around text-sm ">
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
  );
};

export default UserDetails;
