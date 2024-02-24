import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <div className="border-t py-4">
      <div className="max-w-5xl mx-auto px-4 grid md:grid-cols-2 gap-2">
        <div>Website domain</div>

        <ul className="flex items-center gap-4 md:gap-8 text-primary ">
          <li className="cursor-pointer ">
            <Link href="/">About</Link>
          </li>
          <li className="cursor-pointer ">
            <Link href="/">Contact</Link>
          </li>

          <li className="cursor-pointer ">
            <Link href="/">Privacy</Link>
          </li>

          <li className="cursor-pointer ">
            <Link href="/">Terms</Link>
          </li>

          <li className="cursor-pointer ">
            <Link href="/">Escort Info</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
