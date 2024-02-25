"use client";

import React, { useMemo } from "react";
import Header from "@/components/layout/header";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import Link from "next/link";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import FormAccordion from "@/components/custom/form-accordion";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";

import "react-quill/dist/quill.snow.css";

import dynamic from "next/dynamic";
import { Textarea } from "@/components/ui/textarea";

const CreateAdd = () => {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  return (
    <>
      <Header button={""} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-2xl md:text-3xl text-slate-700 mb-3">
              Create your post
            </h1>
            <p className="text-slate-600 mb-10 text-sm">
              First time here? Your account will be created along with your
              first post.
            </p>

            <ul className="text-slate-600 space-y-8 list-decimal ml-3.5">
              <li className="">
                <p className="mb-4">Where would you like to post?</p>

                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5 md:ml-4">
                    <Label
                      htmlFor="state"
                      className="text-slate-700 text-base font-normal"
                    >
                      State
                    </Label>

                    <Select>
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Please select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>

                  <div className="space-y-1.5 md:ml-4">
                    <Label
                      htmlFor="city"
                      className="text-slate-700 text-base font-normal"
                    >
                      City
                    </Label>

                    <Select>
                      <SelectTrigger id="state">
                        <SelectValue placeholder="Please select" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectGroup>
                          <SelectLabel>Fruits</SelectLabel>
                          <SelectItem value="apple">Apple</SelectItem>
                          <SelectItem value="banana">Banana</SelectItem>
                          <SelectItem value="blueberry">Blueberry</SelectItem>
                          <SelectItem value="grapes">Grapes</SelectItem>
                          <SelectItem value="pineapple">Pineapple</SelectItem>
                        </SelectGroup>
                      </SelectContent>
                    </Select>
                  </div>
                  <p className="text-[10px] ml-4 col-span-2">
                    If you want your city or area added to the list, please
                    write to
                    <span className="text-primary ml-1">
                      support@skipthegames.com
                    </span>
                  </p>
                </div>
              </li>
              <li className="">
                <p className="mb-4">In what category would you like to post?</p>

                <div className="md:ml-4">
                  <Select>
                    <SelectTrigger className="md:col-span-2 bg-white">
                      <SelectValue placeholder="Looking for a" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="female_excort">
                        Female escort
                      </SelectItem>
                      <SelectItem value="ts_escort">TS escort</SelectItem>
                      <SelectItem value="male_for_male">
                        Male for male escort
                      </SelectItem>
                      <SelectItem value="dom_fetish">
                        Dom / Fetish provider
                      </SelectItem>
                      <SelectItem value="male_for_female">
                        Male for female escort
                      </SelectItem>
                      <SelectItem value="massage">
                        Massage or massage studio
                      </SelectItem>
                      <SelectItem value="snap">
                        Web / Snap entertainer
                      </SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </li>
            </ul>
          </div>

          <div className="flex flex-col items-center justify-center">
            <h1 className="text-2xl md:text-3xl text-slate-700 mb-5">
              Registered before?
            </h1>
            <Link className="w-3/4" href={"/sign-in"}>
              <Button className="w-full">Login</Button>
            </Link>
          </div>
        </div>

        <div className="mt-10">
          <Card className="bg-slate-50 border-dashed">
            <CardHeader>
              <CardTitle className="text-slate-800 text-lg md:text-xl font-normal">
                You agree to follow these rules:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-xs md:text-sm font-normal space-y-3 text-slate-600 list-decimal list-inside">
                <li>All posters must be of legal age.</li>
                <li>
                  You may not post any content or information of anyone that is
                  not of legal age.
                </li>
                <li>
                  You may not mention or infer that any person advertised is of
                  less than legal age. Words like "young", "school girl-like" or
                  similar may not be used.
                </li>
                <li>
                  You may not post images or personal information of another
                  person without consent.
                </li>
                <li>
                  If posting in Escort/Massage/DOM categories, you may only post
                  in the areas that you currently see people in.
                </li>
                <li>
                  If you are touring, you MUST state the exact dates you are
                  going to be in each of the cities you are visiting.
                </li>
                <li>
                  If you are primarily selling photos/videos/snap, you must post
                  in the Cam/Snap/Web/Phone category.
                </li>
                <li>Only females may post in the Female escort category.</li>
              </ul>
            </CardContent>
          </Card>
        </div>

        <div className="mt-10 flex flex-col gap-3">
          <FormAccordion title="Must have info">
            <div className="grid  md:grid-cols-3 w-full items-start gap-4 md:gap-1.5 border-b py-4 md:py-8">
              <Label className="flex flex-col gap-0.5 font-normal text-base">
                Title of your post
                <div>
                  <Badge className="font-normal rounded" variant="default">
                    Required
                  </Badge>
                </div>
              </Label>
              <Input
                className="col-span-2"
                type="text"
                placeholder="Make it descriptive and AVOID ALL CAPITAL LETTERS"
              />
            </div>

            <div className="grid md:grid-cols-3 w-full gap-4 items-start md:gap-1.5 border-b py-4 md:py-8">
              <Label className="flex flex-col gap-0.5 font-normal text-base">
                Age
                <div>
                  <Badge className="font-normal rounded" variant="default">
                    Required
                  </Badge>
                </div>
              </Label>
              <Input
                className="w-[180px] col-span-2"
                type="number"
                placeholder="Age"
              />
            </div>

            <div className="grid  md:grid-cols-3 w-full items-start gap-4 md:gap-1.5 border-b py-4 md:py-8">
              <Label className="flex flex-col gap-0.5 font-normal text-base">
                Your location
                <div>
                  <Badge className="font-normal rounded" variant="default">
                    Required
                  </Badge>
                </div>
              </Label>
              <div className="col-span-2 space-y-2">
                <Input type="text" placeholder="Where do you work" />

                <p className="text-sm text-slate-600">
                  Broad description of either your incall area, or the area
                  where you usually outcall to, for example Manhattan or EWR
                </p>
              </div>
            </div>

            <div className="grid  md:grid-cols-3 w-full items-start gap-4 md:gap-1.5 border-b py-4 md:py-8">
              <Label className="flex flex-col gap-0.5 font-normal text-base">
                Which gender(s) do you offer services to?
                <div>
                  <Badge className="font-normal rounded" variant="default">
                    Required
                  </Badge>
                </div>
              </Label>

              <div className="flex col-span-2 items-center justify-around w-full h-full">
                <div className="flex items-center space-x-2">
                  <Checkbox id="man" />
                  <label
                    htmlFor="man"
                    className="text-sm text-slate-700 font-medium  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Man
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="woman" />
                  <label
                    htmlFor="woman"
                    className="text-sm text-slate-700 font-medium  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Woman
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="couples" />
                  <label
                    htmlFor="couples"
                    className="text-sm text-slate-700 font-medium  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                  >
                    Couples
                  </label>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-3 w-full gap-4 items-start md:gap-1.5 border-b py-4 md:py-8">
              <Label className="flex flex-col gap-0.5 font-normal text-base">
                Write the body of your post
                <div>
                  <Badge className="font-normal rounded" variant="default">
                    Required
                  </Badge>
                </div>
              </Label>

              <Textarea className="col-span-2 h-32" />
              {/* <ReactQuill
                className="col-span-2"
                theme="snow"
                value={"React quill"}
              /> */}
            </div>
          </FormAccordion>
          <FormAccordion title="Contact">
            <div className="flex items-center space-x-2 pt-4 pb-5">
              <Checkbox id="inquiries" />
              <label
                htmlFor="inquiries"
                className="text-sm text-slate-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I want to be able to receive email inquiries from my ad.{" "}
                <Link className="text-primary" href={"/"}>
                  Learn more
                </Link>
              </label>
            </div>

            <div className="space-y-3 pb-3">
              <Label className="font-normal text-base">Your phone number</Label>
              <Input
                className="col-span-2"
                type="text"
                placeholder="(000)-000-0000"
              />
            </div>

            <div className="flex items-center space-x-2 pt-4">
              <Checkbox id="receive_phone" />
              <label
                htmlFor="receive_phone"
                className="text-sm text-slate-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                I want to be able to receive phone inquiries from my ad (Your
                phone number is protected automatically).
                <Link className="text-primary" href={"/"}>
                  Learn more
                </Link>
              </label>
            </div>
          </FormAccordion>
          <FormAccordion title="Your pictures">
            <div className="py-4 space-y-6">
              <p className="text-slate-700">
                The first 3 photos with stars will show in the Gallery search
                results layout. A photo with the yellow star will show in the
                Single search results layout. All images will be shown in the
                ad.
              </p>

              <div className="grid md:grid-cols-5 gap-4">
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
                <Input id="picture" type="file" />
              </div>
            </div>
          </FormAccordion>
          <FormAccordion title="Nice to have info">Hi</FormAccordion>
        </div>
      </main>
    </>
  );
};

export default CreateAdd;
