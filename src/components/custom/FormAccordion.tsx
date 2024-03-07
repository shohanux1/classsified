import React, { ReactNode } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { IoIosMenu } from "react-icons/io";

type FormAccordionProps = {
  title: string;
  children: React.ReactNode;
  value: string;
};

const FormAccordion = ({ title, children, value }: FormAccordionProps) => {
  return (
    <AccordionItem className="border-0" value={value}>
      <AccordionTrigger className=" hover:no-underline bg-slate-200 px-4 py-3 rounded-md">
        <div className="flex items-center gap-4 text-slate-700">
          <IoIosMenu className="h-6 w-6" />
          {title}
        </div>
      </AccordionTrigger>
      <AccordionContent className="p-5">{children}</AccordionContent>
    </AccordionItem>
  );
};

export default FormAccordion;
