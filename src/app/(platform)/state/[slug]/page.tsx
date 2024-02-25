"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";

const State = () => {
  const pathName = usePathname();

  return (
    <div className="max-w-5xl mx-auto px-4 py-10 h-full min-h-[70vh]">
      <div className=" space-y-1 mb-8">
        <h1 className="capitalize text-2xl">{pathName.split("/")[2]}</h1>
        <p className="text-slate-700">
          Click on an area/region below to see the listings
        </p>
      </div>

      <ul className=" list-disc marker:text-slate-700 list-inside text-primary space-y-1 columns-2 md:columns-4">
        <li>
          <Link href={"/"}>Alachua</Link>
        </li>

        <li>
          <Link href={"/"}>Boca Raton</Link>
        </li>

        <li>
          <Link href={"/"}>Fort Pierce</Link>
        </li>

        <li>
          <Link href={"/"}>Newport Richey</Link>
        </li>
      </ul>
    </div>
  );
};

export default State;
