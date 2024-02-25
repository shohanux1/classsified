import React from "react";
import Link from "next/link";
import { GoChevronDown } from "react-icons/go";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

type ProvidercardProps = {
  country: string;
  value: string;
  states?: Array<{ name: string; code?: string }>;
};

const Providercard = ({ country, value, states }: ProvidercardProps) => {
  return (
    <Accordion type="single" collapsible>
      <AccordionItem defaultValue="usa" className="border-none" value={value}>
        <AccordionTrigger className="flex items-center justify-between rounded-lg md:font-medium bg-slate-200 hover:no-underline px-5  py-3">
          Providers in {country}
        </AccordionTrigger>
        <AccordionContent>
          {states ? (
            <ul className="marker:text-slate-800 space-y-1.5 columns-2  list-disc list-inside text-primary p-5">
              {states?.map(({ name, code }) => (
                <li key={code} className="text-base cursor-pointer transition ">
                  <Link href={`state/${name}`}>{name}</Link>
                </li>
              ))}
            </ul>
          ) : (
            <div className="flex items-center justify-center py-4 text-lg text-slate-600">
              No Data found
            </div>
          )}
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default Providercard;
