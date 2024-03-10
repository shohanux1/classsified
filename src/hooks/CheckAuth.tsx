import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

const getUser = async ({ params }: { params: number }) => {
  const res = await db.user.findFirst({
    where: {
      id: params,
    },
  });
  return res;
};

const checkAuth = async () => {
  const session = await getServerSession(authOptions);

  if (!session) redirect("/sign-in");

  return getUser(session?.user.id);
};

export default checkAuth;
