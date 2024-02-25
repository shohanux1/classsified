"use client";

import React, { useEffect } from "react";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const CityPost = () => {
  return (
    <div className="max-w-5xl px-4 mx-auto h-screen py-10">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="w-3/5">Post Title</TableHead>
            <TableHead>Entertainer age </TableHead>
            <TableHead className="text-right">Entertainer location </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="text-slate-700 py-4">
              I can be your biggest fantasy come let me relax you{" "}
            </TableCell>
            <TableCell className="text-slate-700 py-4">25</TableCell>
            <TableCell className="text-right text-slate-700 py-4">
              Birminghum
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>

      <div className="h-12 w-[400px] rounded-full fixed backdrop-blur-md bottom-5 left-2/4 -translate-x-2/4 bg-blue-400/30"></div>
    </div>
  );
};

export default CityPost;
