import React from "react";
import { Checkbox } from "../ui/checkbox";
import Link from "next/link";

type PrivacyCheckboxProps = {
  field: any;
  id: string;
  title: any;
};
const PrivacyCheckbox = ({ field, id, title }: PrivacyCheckboxProps) => {
  return (
    <div className="flex items-center space-x-2 pt-4">
      <Checkbox
        checked={field.value}
        onCheckedChange={field.onChange}
        id={id}
      />
      <label
        htmlFor={id}
        className="text-sm text-slate-700  peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </label>
    </div>
  );
};

export default PrivacyCheckbox;
