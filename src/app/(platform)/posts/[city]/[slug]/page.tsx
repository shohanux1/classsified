"use client";

import React from "react";
import { useParams } from "next/navigation";
import useFetch from "@/hooks/useFetch";
import { Post } from "@prisma/client";
import { PostCarousel } from "@/components/custom/PostCarousel";

const PostDetails = () => {
  const { slug } = useParams();

  const { data, loading, error } = useFetch<Post[]>({
    url: `/api/post/single-post/${slug}`,
  });

  if (loading) {
    return <div>Loading...</div>;
  }

  console.log(data);

  return (
    <div className="max-w-5xl px-4 mx-auto py-10">
      <div className="flex justify-center mb-20">
        <PostCarousel />
      </div>
      <div className="flex items-center justify-center w-full">
        <ul className="w-full list-disc [&>*:nth-child(even)]:bg-slate-200 [&>*:nth-child(odd)]">
          <li className="flex items-center justify-between w-full py-2 px-2 border-b">
            <span>I See</span>
            <span>Man / Woman / Couples</span>
          </li>
          <li className="flex items-center justify-between w-full py-2 px-2 border-b">
            <span>I See</span>
            <span>Man / Woman / Couples</span>
          </li>
          <li className="flex items-center justify-between w-full py-2 px-2 border-b">
            <span>I See</span>
            <span>Man / Woman / Couples</span>
          </li>
        </ul>
      </div>

      {/* {data &&
        data.map((item) => (
          <div key={item.id}>
            <h2>{item.title}</h2>
            <p>{item.bdsmActivity}</p>
            {item.pictures}
          </div>
        ))}
      {error && <div>Error: {error.message}</div>}{" "} */}
    </div>
  );
};

export default PostDetails;
