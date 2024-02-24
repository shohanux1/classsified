"use client";

import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import { CiSearch } from "react-icons/ci";
import { cn } from "@/lib/utils";

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);

  const handleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  return (
    <div className="py-4 bg-white md:bg-slate-100 md:shadow-sm border-0 md:border-b">
      <div
        className={cn(
          "hidden md:grid md:grid-cols-8 gap-4  max-w-5xl mx-auto px-4 w-full",
          !showFilter ? "hidden" : "grid"
        )}
      >
        <Select>
          <SelectTrigger className="md:col-span-1 bg-white">
            <SelectValue placeholder="I am a" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="man">Man</SelectItem>
            <SelectItem value="woman">Woman</SelectItem>
            <SelectItem value="couple">Couple</SelectItem>
          </SelectContent>
        </Select>
        <Select>
          <SelectTrigger className="md:col-span-2 bg-white">
            <SelectValue placeholder="Looking for a" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="female_excort">Female escort</SelectItem>
            <SelectItem value="ts_escort">TS escort</SelectItem>
            <SelectItem value="male_for_male">Male for male escort</SelectItem>
            <SelectItem value="dom_fetish">Dom / Fetish provider</SelectItem>
            <SelectItem value="male_for_female">
              Male for female escort
            </SelectItem>
            <SelectItem value="massage">Massage or massage studio</SelectItem>
            <SelectItem value="snap">Web / Snap entertainer</SelectItem>
          </SelectContent>
        </Select>
        <Input
          className="bg-white md:col-span-2"
          placeholder="City name (required)"
        />
        <Input
          className="bg-white md:col-span-2"
          placeholder="Blonde, asian, gfe..."
        />
        <Button className="text-xl w-full" size={"icon"}>
          <CiSearch />
        </Button>
      </div>

      <div className="text-center mt-4 md:hidden max-w-sm mx-auto">
        <Button
          onClick={handleFilter}
          className="w-full py-6 text-slate-600"
          variant={"outline"}
        >
          {!showFilter ? "Find Escorts" : "Hide the searchbar"}
        </Button>
      </div>
    </div>
  );
};

export default Filter;
