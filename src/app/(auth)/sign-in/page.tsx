"use client";

import React, { useEffect, useState } from "react";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import { signIn } from "next-auth/react";
import { useSession } from "next-auth/react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const formSchema = z.object({
  email: z.string().min(2, "Email is required").max(50),
  password: z.string().min(1, { message: "Password is required" }).max(50),
});

const Signin = () => {
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const session = useSession();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    setLoading((prev) => !prev);
    const response = await signIn("credentials", {
      email: values.email,
      password: values.password,
      redirect: false,
      callbackUrl: "/",
    });
    setLoading((prev) => !prev);

    if (response?.ok) {
      window.location.assign("/");
      toast.success("Successfully log in to your account");
    } else {
      toast.error("Invalid email or password");
      setLoading(false);
    }
  };

  useEffect(() => {
    if (session.status === "authenticated") {
      router.push("/");
    }
  }, [session, router]);

  return (
    <div className="flex items-center justify-center px-4 h-full">
      <Card className=" w-full max-w-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-medium">
            Log in to your account
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

              <p className="text-sm text-slate-700 py-2">
                Having trouble in sign in?
                <Link className="text-primary ml-2" href={"/"}>
                  Click here
                </Link>
              </p>

              <Button disabled={loading} type="submit" className="w-full">
                {loading ? "Please wait ..." : "Sign in"}
              </Button>
            </form>
          </FormProvider>
        </CardContent>
        <CardFooter className="flex flex-col items-center text-slate-700">
          <h1 className="text-sm text-slate-600">
            Don't have an account?
            <Link className="text-primary ml-2" href={"/sign-up"}>
              Request Now
            </Link>
          </h1>
        </CardFooter>
      </Card>
    </div>
  );
};

export default Signin;
