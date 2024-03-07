"use client";

import React, { useEffect, useState } from "react";
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
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormControl, FormField, FormItem, FormMessage } from "../ui/form";
import axios from "axios";
import { db } from "@/lib/db";

const formSchema = z.object({
  type: z.string(),
  city: z.string().min(2).max(50),
  lookingFor: z.string(),
  gender: z.string(),
});

type TestProps = {
  id: number;
  name: string;
};

const Filter = () => {
  const [showFilter, setShowFilter] = useState(false);
  const [categories, setCategories] = useState<TestProps[]>();

  const handleFilter = () => {
    setShowFilter((prev) => !prev);
  };

  const fetchCategory = async () => {
    try {
      const res = await axios.get("/api/category");
      setCategories(res.data);
    } catch (error) {
      throw new Error("Something is wrong...");
    }
  };

  useEffect(() => {
    fetchCategory();
  }, []);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      type: "",
      city: "",
      lookingFor: "",
      gender: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <div className="py-4 bg-white md:bg-slate-100 md:shadow-sm border-0 md:border-b">
      <FormProvider {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className={cn(
            "hidden md:grid md:grid-cols-8 gap-4  max-w-5xl mx-auto px-4 w-full",
            !showFilter ? "hidden" : "grid"
          )}
        >
          <Button
            className="text-xl w-full order-last md:order-first"
            size={"icon"}
            type="submit"
          >
            <CiSearch />
          </Button>
          <FormField
            control={form.control}
            name="type"
            render={({ field }) => (
              <FormItem className="bg-white md:col-span-2">
                <FormControl>
                  <Input {...field} placeholder="Blonde, asian, gfe..." />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="bg-white md:col-span-2">
                <FormControl>
                  <Input {...field} placeholder="City name (required)" />
                </FormControl>
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="lookingFor"
            render={({ field }) => (
              <FormItem className="md:col-span-2 bg-white">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Looking for a" />
                    </SelectTrigger>
                    <SelectContent>
                      {categories?.map((category: any) => {
                        return (
                          <SelectItem key={category.id} value={category.name}>
                            {category.name}
                          </SelectItem>
                        );
                      })}
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="gender"
            render={({ field }) => (
              <FormItem className="md:col-span-1 bg-white">
                <FormControl>
                  <Select
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="I am a" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="man">Man</SelectItem>
                      <SelectItem value="woman">Woman</SelectItem>
                      <SelectItem value="couple">Couple</SelectItem>
                    </SelectContent>
                  </Select>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </form>
      </FormProvider>

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
