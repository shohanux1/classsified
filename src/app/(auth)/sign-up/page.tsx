"use client";

import React, { useEffect, useState } from "react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/Layout/Header";
import { z } from "zod";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";
import toast from "react-hot-toast";

const formSchema = z
  .object({
    email: z.string().min(2).max(50),
    password: z.string().min(1, { message: "Password is required" }).max(50),
    confirmPassword: z
      .string()
      .min(5, { message: "Password is required" })
      .max(50),
  })
  .refine((data) => data.password === data.confirmPassword, {
    path: ["password"],
    message: "Password does not match",
  });

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      setLoading((prev) => !prev);
      const { data } = await axios.post(
        "/api/sign-up",
        {
          email: values.email,
          password: values.password,
          role: "USER",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setLoading((prev) => !prev);
      toast.success(`${data.message}`);
      router.push("/sign-in");
    } catch (error: any) {
      toast.error(`${error.response.data.message}`);
      setLoading((prev) => !prev);
    }
  };

  return (
    <div className="flex justify-center items-center h-full px-4 ">
      <Card className=" w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">
            Create an advertiser account
          </CardTitle>
        </CardHeader>
        <CardContent>
          <FormProvider {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className="space-y-2 md:space-y-4"
            >
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="confirmPassword"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Password</FormLabel>
                    <FormControl>
                      <Input
                        type="password"
                        placeholder="Confirm password"
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <p className="text-sm text-slate-700 py-2">
                Having trouble in sign in?
                <Link className="text-primary ml-2" href={"/"}>
                  Click here
                </Link>
              </p>

              <Button disabled={loading} type="submit" className="w-full">
                {loading ? "Please wait ..." : "Create account"}
              </Button>
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-slate-700">
          <h1 className="text-sm text-slate-600">
            Already have an account?
            <Link className="text-primary ml-2" href={"/sign-in"}>
              Login now
            </Link>
          </h1>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
