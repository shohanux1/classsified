"use client";

import Providercard from "@/components/custom/provider-card";
import { Accordion } from "@/components/ui/accordion";

const usaStates = [
  {
    name: "Alabama",
    code: "AL",
  },
  {
    name: "Alaska",
    code: "AK",
  },
  {
    name: "American Samoa",
    code: "AS",
  },
  {
    name: "Arizona",
    code: "AZ",
  },
  {
    name: "Arkansas",
    code: "AR",
  },
  {
    name: "California",
    code: "CA",
  },
  {
    name: "Colorado",
    code: "CO",
  },
  {
    name: "Connecticut",
    code: "CT",
  },
  {
    name: "Delaware",
    code: "DE",
  },
  {
    name: "District Of Columbia",
    code: "DC",
  },
  {
    name: "Florida",
    code: "FL",
  },
  {
    name: "Georgia",
    code: "GA",
  },
  {
    name: "Guam",
    code: "GU",
  },
  {
    name: "Hawaii",
    code: "HI",
  },
  {
    name: "Idaho",
    code: "ID",
  },
  {
    name: "Illinois",
    code: "IL",
  },
  {
    name: "Indiana",
    code: "IN",
  },
  {
    name: "Iowa",
    code: "IA",
  },
  {
    name: "Kansas",
    code: "KS",
  },
  {
    name: "Kentucky",
    code: "KY",
  },
  {
    name: "Louisiana",
    code: "LA",
  },
  {
    name: "Maine",
    code: "ME",
  },
  {
    name: "Marshall Islands",
    code: "MH",
  },
  {
    name: "Maryland",
    code: "MD",
  },
  {
    name: "Massachusetts",
    code: "MA",
  },
  {
    name: "Michigan",
    code: "MI",
  },
  {
    name: "Minnesota",
    code: "MN",
  },
  {
    name: "Mississippi",
    code: "MS",
  },
  {
    name: "Missouri",
    code: "MO",
  },
  {
    name: "Montana",
    code: "MT",
  },
  {
    name: "Nebraska",
    code: "NE",
  },
  {
    name: "Nevada",
    code: "NV",
  },
  {
    name: "New Hampshire",
    code: "NH",
  },
  {
    name: "New Jersey",
    code: "NJ",
  },
  {
    name: "New Mexico",
    code: "NM",
  },
  {
    name: "New York",
    code: "NY",
  },
  {
    name: "North Carolina",
    code: "NC",
  },
  {
    name: "North Dakota",
    code: "ND",
  },
  {
    name: "Ohio",
    code: "OH",
  },
  {
    name: "Oklahoma",
    code: "OK",
  },
  {
    name: "Oregon",
    code: "OR",
  },
  {
    name: "Palau",
    code: "PW",
  },
  {
    name: "Pennsylvania",
    code: "PA",
  },
  {
    name: "Puerto Rico",
    code: "PR",
  },
  {
    name: "Rhode Island",
    code: "RI",
  },
  {
    name: "South Carolina",
    code: "SC",
  },
  {
    name: "South Dakota",
    code: "SD",
  },
  {
    name: "Tennessee",
    code: "TN",
  },
  {
    name: "Texas",
    code: "TX",
  },
  {
    name: "Utah",
    code: "UT",
  },
  {
    name: "Vermont",
    code: "VT",
  },
  {
    name: "Virgin Islands",
    code: "VI",
  },
  {
    name: "Virginia",
    code: "VA",
  },
  {
    name: "Washington",
    code: "WA",
  },
  {
    name: "West Virginia",
    code: "WV",
  },
  {
    name: "Wisconsin",
    code: "WI",
  },
  {
    name: "Wyoming",
    code: "WY",
  },
];

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
  return (
    <div className="max-w-5xl mx-auto px-4 ">
      <div className="py-4 md:pt-10">
        <div className="grid md:grid-cols-2 gap-3 md:gap-4">
          <div className="flex flex-col gap-3 md:gap-4 w-full">
            <Providercard states={usaStates} value="usa" country="USA" />
            <Providercard
              states={canadaStates}
              value="canada"
              country="CANADA"
            />
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
      </div>
    </div>
  );
}
