import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Header from "@/components/layout/header";

const Signin = () => {
  return (
    <div>
      <Header
        button={
          <div className="w-full md:max-w-sm">
            <Link href={"/create-ad"}>
              <Button className="font-bold w-full" size={"lg"}>
                Post your first ad
              </Button>
            </Link>
          </div>
        }
      />

      <div className="flex items-center justify-center h-[75vh]">
        <Card className=" w-full max-w-lg">
          <CardHeader>
            <CardTitle className="text-2xl font-medium">
              Log in to your account
            </CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-5" action="">
              <div className="grid w-full  items-center gap-2">
                <Label htmlFor="email">Email</Label>
                <Input type="email" id="email" placeholder="Email" />
              </div>

              <div className="grid w-full  items-center gap-2">
                <Label htmlFor="password">Password</Label>
                <Input type="password" id="password" placeholder="Password" />
              </div>

              <Button className="w-full">Log in</Button>
            </form>
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
    </div>
  );
};

export default Signin;
