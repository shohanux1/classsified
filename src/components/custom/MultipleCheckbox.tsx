"use client";

import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";

type MultipleCheckboxProps = {
  title: string;
  data?: string[];
  formMessage?: React.ReactNode;
  field?: any;
};

const MultipleCheckbox = ({
  title,
  data,
  formMessage,
  field,
}: MultipleCheckboxProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 w-full items-start gap-4 md:gap-1.5 border-b py-4 md:py-8"
      )}
    >
      <Label className="flex flex-col gap-0.5 font-normal text-base col-span-2 md:col-span-1">
        {title}
      </Label>

      <div
        className={cn(
          "md:col-span-2 grid items-start gap-3 md:gap-4",
          data?.length === 3 ? "grid-cols-3" : "grid-cols-2"
        )}
      >
        {data?.map((item, i) => (
          <div key={i} className="flex items-center space-x-2">
            <Checkbox
              onCheckedChange={(checked) => {
                return checked
                  ? field.onChange([...field.value, item])
                  : field.onChange(
                      field.value?.filter((value: string) => value !== item)
                    );
              }}
              value={item}
              id={item}
            />
            <label
              htmlFor={item}
              className="text-sm text-slate-700 leading-none peer-disabled:cursor-not-allowed capitalize peer-disabled:opacity-70"
            >
              {item}
            </label>
          </div>
        ))}

        {formMessage}
      </div>
    </div>
  );
};

export default MultipleCheckbox;
