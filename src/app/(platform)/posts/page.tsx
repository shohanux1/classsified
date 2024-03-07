import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { redirect } from "next/navigation";

const Posts = async () => {
  const session = await getServerSession(authOptions);

  if (!session) {
    return redirect("/sign-in");
  }

  return (
    <div className="max-w-5xl mx-auto px-4 flex flex-col items-center justify-center py-32">
      <h1 className="text-2xl mb-2">Not found</h1>
      <p className="text-slate-700 text-sm">
        The post you are looking for is not here. Please try the following:
      </p>

      <ul className="list-disc list-inside mt-4">
        <li>Use the search form above</li>
      </ul>
    </div>
  );
};

export default Posts;
