"use client";

import Image from "next/image";
import Link from "next/link";

import Providercard from "@/components/custom/ProviderCard";
import ProviderPhotos from "@/components/custom/ProviderPhotos";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import HeroImage from "../../../public/condom.jpeg";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useSession } from "next-auth/react";
import axios from "axios";

const canadaStates = [
  {
    name: "Alberta",
    code: "AB",
  },
  {
    name: "British Columbia",
    code: "BC",
  },
  {
    name: "Manitoba",
    code: "MB",
  },
  {
    name: "New Brunswick",
    code: "NB",
  },
  {
    name: "Newfoundland and Labrador",
    code: "NL",
  },
  {
    name: "Northwest Territories",
    code: "NT",
  },
  {
    name: "Nova Scotia",
    code: "NS",
  },
  {
    name: "Nunavut",
    code: "NU",
  },
  {
    name: "Ontario",
    code: "ON",
  },
  {
    name: "Prince Edward Island",
    code: "PE",
  },
  {
    name: "Quebec",
    code: "QC",
  },
  {
    name: "Saskatchewan",
    code: "SK",
  },
  {
    name: "Yukon Territory",
    code: "YT",
  },
];

const europeCountry = [
  {
    name: "Andorra",
    code: "AD",
  },
  {
    name: "Albania",
    code: "AL",
  },
  {
    name: "Austria",
    code: "AT",
  },
  {
    name: "Åland Islands",
    code: "AX",
  },
  {
    name: "Bosnia and Herzegovina",
    code: "BA",
  },
  {
    name: "Belgium",
    code: "BE",
  },
  {
    name: "Bulgaria",
    code: "BG",
  },
  {
    name: "Belarus",
    code: "BY",
  },
  {
    name: "Switzerland",
    code: "CH",
  },
  {
    name: "Cyprus",
    code: "CY",
  },
  {
    name: "Czech Republic",
    code: "CZ",
  },
  {
    name: "Germany",
    code: "DE",
  },
  {
    name: "Denmark",
    code: "DK",
  },
  {
    name: "Estonia",
    code: "EE",
  },
  {
    name: "Spain",
    code: "ES",
  },
  {
    name: "Finland",
    code: "FI",
  },
  {
    name: "Faroe Islands",
    code: "FO",
  },
  {
    name: "France",
    code: "FR",
  },
  {
    name: "United Kingdom",
    code: "GB",
  },
  {
    name: "Guernsey",
    code: "GG",
  },
  {
    name: "Greece",
    code: "GR",
  },
  {
    name: "Croatia",
    code: "HR",
  },
  {
    name: "Hungary",
    code: "HU",
  },
  {
    name: "Ireland",
    code: "IE",
  },
  {
    name: "Isle of Man",
    code: "IM",
  },
  {
    name: "Iceland",
    code: "IC",
  },
  {
    name: "Italy",
    code: "IT",
  },
  {
    name: "Jersey",
    code: "JE",
  },
  {
    name: "Liechtenstein",
    code: "LI",
  },
  {
    name: "Lithuania",
    code: "LT",
  },
  {
    name: "Luxembourg",
    code: "LU",
  },
  {
    name: "Latvia",
    code: "LV",
  },
  {
    name: "Monaco",
    code: "MC",
  },
  {
    name: "Moldova, Republic of",
    code: "MD",
  },
  {
    name: "Macedonia, The Former Yugoslav Republic of",
    code: "MK",
  },
  {
    name: "Malta",
    code: "MT",
  },
  {
    name: "Netherlands",
    code: "NL",
  },
  {
    name: "Norway",
    code: "NO",
  },
  {
    name: "Poland",
    code: "PL",
  },
  {
    name: "Portugal",
    code: "PT",
  },
  {
    name: "Romania",
    code: "RO",
  },
  {
    name: "Russian Federation",
    code: "RU",
  },
  {
    name: "Sweden",
    code: "SE",
  },
  {
    name: "Slovenia",
    code: "SI",
  },
  {
    name: "Svalbard and Jan Mayen",
    code: "SJ",
  },
  {
    name: "Slovakia",
    code: "SK",
  },
  {
    name: "San Marino",
    code: "SM",
  },
  {
    name: "Ukraine",
    code: "UA",
  },
  {
    name: "Holy See (Vatican City State)",
    code: "VA",
  },
];

export default function Home() {
  const session = useSession();
  const router = useRouter();
  const [states, setStates] = useState([]);

  useEffect(() => {
    const fetchState = async () => {
      try {
        const { data } = await axios.get("/api/state");
        setStates(data);
      } catch (error) {}
    };

    fetchState();
    router.refresh();
  }, [router, session]);

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
      <div className="grid md:grid-cols-2 gap-3 md:gap-4 mb-5 md:mb-0">
        <div className="flex flex-col gap-3 md:gap-4 w-full">
          <Providercard states={states} value="usa" country="USA" />
          <Providercard states={canadaStates} value="canada" country="CANADA" />
          <Providercard
            value="middle_east"
            country="the Middle East & Africa"
          />
        </div>

        <div className="flex flex-col gap-3 md:gap-4 w-full">
          <Providercard
            states={europeCountry}
            value="europe"
            country="Europe"
          />
          <Providercard
            value="americans"
            country="the Americans & Caribbeean"
          />
          <Providercard value="asia" country="Asia & Australia" />
        </div>
      </div>

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
