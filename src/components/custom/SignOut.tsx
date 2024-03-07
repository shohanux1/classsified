"use client";

import { signOut } from "next-auth/react";
import React from "react";

const SignOut = () => {
  return (
    <button
      className="text-primary transition-all hover:underline"
      onClick={() => signOut()}
    >
      Log out
    </button>
  );
};

export default SignOut;
