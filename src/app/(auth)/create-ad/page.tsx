import React from "react";
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
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const CreateAdd = () => {
  return (
    <>
      <Header button={false} />
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-2 gap-10">
          <div>
            <h1 className="text-3xl text-slate-700 mb-3">Create your post</h1>
            <p className="text-slate-600 mb-10 text-sm">
              First time here? Your account will be created along with your
              first post.
            </p>

            <ul className="text-slate-600 space-y-8 list-decimal ml-3.5">
              <li className="">
                <p className="mb-4">Where would you like to post?</p>

                <div className="grid grid-cols-2 gap-5">
                  <div className="space-y-1.5 ml-4">
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

                  <div className="space-y-1.5 ml-4">
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

                <div className=" ml-4">
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
            <h1 className="text-3xl text-slate-700 mb-5">Registered before?</h1>

            <Button className="w-3/5">Login</Button>
          </div>
        </div>

        <div className="mt-10">
          <Card className="bg-slate-50 border-dashed">
            <CardHeader>
              <CardTitle className="text-slate-700 text-xl font-normal">
                You agree to follow these rules:
              </CardTitle>
            </CardHeader>
            <CardContent>
              <ul className="text-sm font-normal space-y-3 text-slate-600 list-decimal list-inside">
                <li>All posters must be of legal age.</li>
                <li>
                  You may not post any content or information of anyone that is
                  not of legal age.
                </li>
                <li>
                  <p></p>
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
      </main>
    </>
  );
};

export default CreateAdd;
