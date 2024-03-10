"use client";

import React from "react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

const SignOut = () => {
  const router = useRouter();

  return (
    <button
      className="text-primary transition-all hover:underline"
      onClick={() => signOut().then(() => router.push("/"))}
    >
      Log out
    </button>
  );
};

export default SignOut;
