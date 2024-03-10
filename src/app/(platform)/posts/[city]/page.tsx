"use client";

import React, { useEffect, useState } from "react";

import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { usePathname } from "next/navigation";
import axios from "axios";
import DataTable from "@/components/custom/DataTable";

const CityPost = () => {
  const pathname = usePathname().split("/")[2];
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const response = await axios.get(`/api/post/${pathname}`);
        setPosts(response.data.posts);
      } catch (error) {
        throw new Error("Post not found in this city!");
      }
    };

    fetchPost();
  }, []);

  return (
    <div className="max-w-5xl px-4 mx-auto h-screen py-10">
      <DataTable data={posts} />
    </div>
  );
};

export default CityPost;
