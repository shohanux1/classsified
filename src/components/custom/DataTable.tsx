import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import Link from "next/link";
import { City, Post } from "@prisma/client";

const DataTable = ({ data }: { data?: (Post & { city?: City })[] }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>#</TableHead>
          <TableHead className="w-3/5">Post Title</TableHead>
          <TableHead>Entertainer age </TableHead>
          <TableHead className="text-right">Entertainer location </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data?.map(({ title, id, age, city }) => {
          return (
            <TableRow key={id}>
              <TableCell className="text-slate-700 py-4">{id}</TableCell>
              <TableCell className="text-slate-700 py-4 capitalize">
                <Link
                  href={`/posts/${city?.slug}/${id}`}
                  className="hover:underline transition"
                >
                  {title}
                </Link>
              </TableCell>
              <TableCell className="text-slate-700 py-4">{age}</TableCell>
              <TableCell className="text-right text-slate-700 py-4 capitalize">
                {city?.name}
              </TableCell>
            </TableRow>
          );
        })}
      </TableBody>
    </Table>
  );
};

export default DataTable;
