import React from "react";

const ProviderPhotos = ({
  name,
  children,
}: {
  name: string;
  children: React.ReactNode;
}) => {
  return (
    <div className="w-full mt-5 md:mt-10">
      <h1 className="text-xl md:text-2xl mb-4 ">{name}</h1>

      {children}
    </div>
  );
};

export default ProviderPhotos;
