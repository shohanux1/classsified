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
import Header from "@/components/layout/Header";
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
    confirmEmail: z.string().min(2).max(50),
    password: z.string().min(1, { message: "Password is required" }).max(50),
    confirmPassword: z
      .string()
      .min(5, { message: "Password is required" })
      .max(50),
  })
  .refine((data) => data.email === data.confirmEmail, {
    path: ["email"],
    message: "Email does not match",
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
      confirmEmail: "",
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

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="flex items-center justify-center min-h-[75vh] px-4 py-8">
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
                name="confirmEmail"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Confirm Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Confirm your email" {...field} />
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

              <Button disabled={loading} type="submit" className="w-full">
                {loading
                  ? "Please wait ..."
                  : "Verify my email and post the ad"}
              </Button>
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-slate-700">
          <p>
            Password not working?
            <Link className="text-primary underline" href={"/"}>
              Click here
            </Link>
          </p>
        </CardFooter>
      </Card>
    </div>
  );
};

export default SignUp;
