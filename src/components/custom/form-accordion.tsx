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
};

const FormAccordion = ({ title, children }: FormAccordionProps) => {
  return (
    <Accordion type="single" defaultValue="item-1" collapsible>
      <AccordionItem className="border-0" value="item-1">
        <AccordionTrigger className=" hover:no-underline bg-slate-200 px-4 py-3 rounded-md">
          <div className="flex items-center gap-4 text-slate-700">
            <IoIosMenu className="h-6 w-6" />
            {title}
          </div>
        </AccordionTrigger>
        <AccordionContent className="p-5">{children}</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
};

export default FormAccordion;
