"use client";

import React, { useEffect, useRef } from "react";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { Input } from "../ui/input";
import { cn } from "@/lib/utils";
import { Textarea } from "../ui/textarea";

type InputWithLabelProps = {
  label: string;
  placeholder: string;
  description?: string;
  required?: boolean;
  field?: any;
  formMessage?: React.ReactNode;
  type?: string;
  textArea?: boolean;
};

const InputWithLabel = ({
  label,
  placeholder,
  description,
  required,
  field,
  type,
  formMessage,
  textArea,
}: InputWithLabelProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 w-full items-start gap-4 md:gap-1.5 border-b py-4 md:py-8"
      )}
    >
      <Label className="flex flex-col gap-0.5 font-normal text-base col-span-2 md:col-span-1">
        {label}
        {required && (
          <div>
            <Badge className="font-normal rounded" variant="default">
              Required
            </Badge>
          </div>
        )}
      </Label>

      <div className="md:col-span-2 space-y-2">
        {textArea ? (
          <Textarea
            placeholder={placeholder}
            className="resize-none h-32"
            {...field}
          />
        ) : (
          <Input
            value={field?.value || ""}
            onChange={field?.onChange}
            type={type}
            placeholder={placeholder}
          />
        )}

        <p className="text-xs md:text-sm text-slate-600">{description}</p>
        {formMessage}
      </div>
    </div>
  );
};

export default InputWithLabel;
