"use client";

import useFetch from "@/hooks/useFetch";
import React, { useState } from "react";
import { Post } from "@prisma/client";
import Loader from "@/components/custom/Loader";
import { Button } from "@/components/ui/button";
import { PiTrashLight } from "react-icons/pi";
import axios from "axios";
import toast from "react-hot-toast";
import { AiOutlineLoading } from "react-icons/ai";
import { useSession } from "next-auth/react";

const ManagePost = () => {
  const [deletingPostId, setDeletingPostId] = useState<number | null>(null);

  const session = useSession();

  const { data, loading, setData } = useFetch<Post[]>({
    url: `/api/post/single-post/${session.data?.user.id}`,
  });

  if (loading) {
    return <Loader />;
  }

  const deletePost = async (id: number) => {
    try {
      setDeletingPostId(id);
      const { data } = await axios.delete(`/api/post/single-post/${id}`);
      toast.success(data.message);
      setData((prevPosts: Post[]) =>
        prevPosts.filter((post) => post.id !== id)
      );
    } catch (error: any) {
      toast.error(error.message);
    } finally {
      setDeletingPostId(null);
    }
  };

  return (
    <div className="w-full">
      {data?.map((post) => (
        <div
          key={post.id}
          className="capitalize border-b w-full py-2 flex items-center justify-between"
        >
          <h1 className="text-sm text-slate-600">{post.title} </h1>
          <Button
            onClick={() => deletePost(post.id)}
            variant={"destructive"}
            size={"icon"}
            disabled={deletingPostId === post.id}
          >
            {deletingPostId === post.id ? (
              <AiOutlineLoading className="h-5 w-5 animate-spin" />
            ) : (
              <PiTrashLight className="h-5 w-5" />
            )}
          </Button>
        </div>
      ))}
    </div>
  );
};

export default ManagePost;
