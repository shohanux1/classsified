import Image from "next/image";
import Link from "next/link";

import Providercard from "@/components/custom/ProviderCard";
import ProviderPhotos from "@/components/custom/ProviderPhotos";
import HeroImage from "../../../public/condom.jpeg";
import { Accordion } from "@/components/ui/accordion";
import { db } from "@/lib/db";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

const getCountry = async () => {
  const res = await db.country.findMany({
    include: {
      states: true,
    },
  });

  return res;
};

export default async function Home() {
  const countries = await getCountry();

  console.log(countries);

  return (
    <div className="max-w-5xl mx-auto px-4 pb-10">
      <div className="flex  items-center justify-between mt-5 md:mb-4 mb-8 w-full mx-auto">
        <div className="w-full max-w-2xl">
          <h1 className="text-xl md:text-3xl mb-5 md:mb-8  text-slate-800 text-center md:text-start">
            Top escort cities
          </h1>

          <div className="flex items-center justify-between w-full md:px-0 px-12">
            <ul className="list-disc list-inside text-primary text-base md:text-lg  space-y-1 ">
              <li>
                <Link href={"/"}>Boston</Link>
              </li>
              <li>
                <Link href={"/"}>Chicago</Link>
              </li>
              <li>
                <Link href={"/"}>Dallas</Link>
              </li>
              <li>
                <Link href={"/"}>Dubai</Link>
              </li>
            </ul>
            <ul className="list-disc list-inside text-primary text-base md:text-lg  space-y-1 ">
              <li>
                <Link href={"/"}>Las Vegas</Link>
              </li>
              <li>
                <Link href={"/"}>London</Link>
              </li>
              <li>
                <Link href={"/"}>New York City</Link>
              </li>
              <li>
                <Link href={"/"}>Philadelphia</Link>
              </li>
            </ul>

            <ul className="hidden lg:block list-disc list-inside text-primary text-base md:text-lg  space-y-1 ">
              <li>
                <Link href={"/"}>Las Vegas</Link>
              </li>
              <li>
                <Link href={"/"}>London</Link>
              </li>
              <li>
                <Link href={"/"}>New York City</Link>
              </li>
              <li>
                <Link href={"/"}>Philadelphia</Link>
              </li>
            </ul>
          </div>
        </div>

        <Image
          src={HeroImage}
          alt="Imgae"
          className="transform -scale-x-100 h-64 w-64 object-contain hidden md:block"
        />
      </div>

      <h1 className=" text-slate-800 text-xl md:text-3xl mb-5">
        Find and meet service providers anywhere
      </h1>

      <Accordion type="single" collapsible className="w-full">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-0">
          {countries.map(({ name, id, states, slug }) => {
            return (
              <Providercard
                key={id}
                states={states}
                value={slug}
                country={name}
              />
            );
          })}
        </div>
      </Accordion>

      <div className="grid md:grid-cols-2 gap-3 lg:my-4">
        <ProviderPhotos name="Popular provider photos">
          <Tabs defaultValue="female">
            <TabsList>
              <TabsTrigger value="female">Female</TabsTrigger>
              <TabsTrigger value="ts">TS</TabsTrigger>
              <TabsTrigger value="male">Male</TabsTrigger>
            </TabsList>
            <TabsContent value="female">
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100 rounded-lg max-w-md w-full">
                <Link href={"/"}>
                  <Image
                    alt="Image"
                    className="h-28 w-full object-cover object-center rounded-lg transition hover:scale-110"
                    width={100}
                    height={100}
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                </Link>

                <Link href={"/"}>
                  <Image
                    alt="Image"
                    className="h-28 w-full object-cover object-center rounded-lg transition hover:scale-110"
                    width={100}
                    height={100}
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                </Link>

                <Link href={"/"}>
                  <Image
                    alt="Image"
                    className="h-28 w-full object-cover object-center rounded-lg transition hover:scale-110"
                    width={100}
                    height={100}
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </ProviderPhotos>
        <ProviderPhotos name="Popular provider posts">
          <Tabs defaultValue="female">
            <TabsList>
              <TabsTrigger value="female">Female</TabsTrigger>
              <TabsTrigger value="ts">TS</TabsTrigger>
              <TabsTrigger value="male">Male</TabsTrigger>
            </TabsList>
            <TabsContent value="female">
              <div className="grid grid-cols-3 gap-4 p-4 bg-slate-100 rounded-lg max-w-md w-full">
                <Link href={"/"}>
                  <Image
                    alt="Image"
                    className="h-28 w-full object-cover object-center rounded-lg transition hover:scale-110"
                    width={100}
                    height={100}
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                </Link>

                <Link href={"/"}>
                  <Image
                    alt="Image"
                    className="h-28 w-full object-cover object-center rounded-lg transition hover:scale-110"
                    width={100}
                    height={100}
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                </Link>

                <Link href={"/"}>
                  <Image
                    alt="Image"
                    className="h-28 w-full object-cover object-center rounded-lg transition hover:scale-110"
                    width={100}
                    height={100}
                    src="https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=800"
                  />
                </Link>
              </div>
            </TabsContent>
          </Tabs>
        </ProviderPhotos>
      </div>

      <div className="grid md:grid-cols-2 gap-3 lg:my-4">
        <ProviderPhotos name="Latest escort articles">
          <ul className="marker:text-slate-800 space-y-1  text-primary ">
            <li className="text-sm cursor-pointer transition hover:translate-x-1 ">
              <Link href="/">SkipTheGames.com FAQ</Link>
            </li>
            <li className="text-sm cursor-pointer transition hover:translate-x-1 ">
              <Link href="/">★ DO NOT let hackers control your account ★</Link>
            </li>
          </ul>
        </ProviderPhotos>
        <ProviderPhotos name="Most read escort articles">
          <ul className="marker:text-slate-800 space-y-1  text-primary ">
            <li className="text-sm cursor-pointer transition hover:translate-x-1 ">
              <Link href="/">
                Escort terms, sex definitions and abbreviations in escort ads
              </Link>
            </li>
            <li className="text-sm cursor-pointer transition hover:translate-x-1 ">
              <Link href="/">
                ★ How to identify fake escort posts and avoid scams
              </Link>
            </li>
          </ul>
        </ProviderPhotos>
      </div>
    </div>
  );
}
