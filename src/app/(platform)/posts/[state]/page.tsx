"use client";

import React, { useEffect } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

// const CityList = () => {
//   const pathName = usePathname();

//   return (
//     <div className="max-w-5xl mx-auto px-4 pb-10">
//       <div className="pt-10 pb-8 space-y-1 ">
//         <h1 className="capitalize text-2xl">{pathName.split("/")[2]}</h1>
//         <p className="text-slate-700">
//           Click on an area/region below to see the listings
//         </p>
//       </div>

//       <ul className=" list-disc marker:text-slate-700 list-inside text-primary space-y-1 columns-2 md:columns-4">
//         <li>
//           <Link href={"/"}>Alachua</Link>
//         </li>

//         <li>
//           <Link href={"/"}>Boca Raton</Link>
//         </li>

//         <li>
//           <Link href={"/"}>Fort Pierce</Link>
//         </li>

//         <li>
//           <Link href={"/"}>Newport Richey</Link>
//         </li>
//       </ul>
//     </div>
//   );
// };

// export default CityList;

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
