import { cn } from "@/lib/utils";
import { Checkbox } from "../ui/checkbox";
import { Label } from "../ui/label";
import { Badge } from "../ui/badge";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
import { FormControl, FormItem, FormLabel } from "../ui/form";

type RadioGroupWithLabelProps = {
  title: string;
  data: string[];
  multiselect?: boolean;
  formMessage?: React.ReactNode;
  field: any;
};

const RadioGroupWithLabel = ({
  title,
  data,
  multiselect,
  formMessage,
  field,
}: RadioGroupWithLabelProps) => {
  return (
    <div
      className={cn(
        "grid grid-cols-1 md:grid-cols-3 w-full items-start gap-4 md:gap-1.5 border-b py-4 md:py-8"
      )}
    >
      <Label className="flex flex-col gap-0.5 font-normal text-base col-span-2 md:col-span-1">
        {title}
      </Label>

      <RadioGroup
        onValueChange={field.onChange}
        defaultValue={field.value}
        className={cn(
          "grid md:col-span-2 justify-around",
          data?.length > 3 ? "grid-cols-2" : "grid-cols-3"
        )}
      >
        {data?.map((item, i) => (
          <FormItem key={i} className="flex items-center space-x-3 space-y-0">
            <FormControl>
              <RadioGroupItem value={item} />
            </FormControl>
            <FormLabel className="font-normal capitalize">{item}</FormLabel>
          </FormItem>
        ))}
      </RadioGroup>

      {formMessage}
    </div>
  );
};

export default RadioGroupWithLabel;
