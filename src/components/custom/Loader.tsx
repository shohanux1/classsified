import React from "react";
import { AiOutlineLoading } from "react-icons/ai";

const Loader = () => {
  return (
    <div className="flex items-center w-full justify-center h-[calc(100%-20%)]">
      <AiOutlineLoading className="h-8 w-8 animate-spin" />
    </div>
  );
};

export default Loader;
