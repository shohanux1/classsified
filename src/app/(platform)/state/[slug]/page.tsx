"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useEffect, useState } from "react";
import axios from "axios";
import { Skeleton } from "@/components/ui/skeleton";

const State = () => {
  const pathName = usePathname();
  const splitCity = pathName.split("/")[2];
  const [cities, setCities] = useState([]);
  const [state, setState] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCities = async () => {
      try {
        setLoading(true);
        const { data } = await axios.get(`/api/city/${splitCity}`);
        setCities(data.cities);
        setState(data.stateName);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        throw new Error("Failed to fetch post..");
      }
    };

    fetchCities();
  }, [pathName, splitCity]);

  const fixPathName = (value: string) => {
    return value.toLowerCase().split(" ").join("-");
  };

  return (
    <div className="max-w-5xl mx-auto px-4 py-10">
      <div className=" space-y-1 mb-8">
        <div>
          <h1 className="capitalize text-2xl">{state}</h1>
          <p className="text-slate-700">
            Click on an area/region below to see the listings
          </p>{" "}
        </div>
      </div>

      <ul className=" list-disc marker:text-slate-700 list-inside text-primary space-y-1 columns-2 md:columns-4">
        {cities?.map(({ id, name }) => {
          return (
            <li key={id}>
              <Link href={`/posts/${fixPathName(name)}`}>{name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default State;
