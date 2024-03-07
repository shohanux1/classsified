"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { FormProvider, useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  ethnicityOptions,
  fetishOptions,
  hairColorOptions,
  paymentMethods,
  usaStatesAndCity,
} from "@/data/usState";
import { useEffect, useState } from "react";
import axios from "axios";
import toast from "react-hot-toast";
import AdRules from "@/components/custom/AdRules";
import { Accordion } from "@/components/ui/accordion";
import FormAccordion from "@/components/custom/FormAccordion";
import InputWithLabel from "@/components/custom/InputWithLabel";
import { Input } from "@/components/ui/input";

import CheckboxWithLabel from "@/components/custom/MultipleCheckbox";
import SingleCheckbox from "@/components/custom/SingleCheckbox";
import PrivacyCheckbox from "@/components/custom/PrivacyCheckbox";
import MultipleCheckbox from "@/components/custom/MultipleCheckbox";
import Link from "next/link";

const formData: {
  placeholder: string;
  title: string;
  value: any;
  type: string;
  description?: string;
}[] = [
  {
    value: "title",
    type: "text",
    title: "Title of your post",
    placeholder: "Make it descriptive and AVOID ALL CAPITAL LETTERS",
  },
  {
    value: "age",
    type: "number",
    title: "Age",
    placeholder: "Age",
  },
  {
    value: "location",
    type: "text",
    title: "Your location",
    placeholder: "Where do you work",
    description:
      "Broad description of either your incall area, or the area where you usually outcall to, for example Manhattan or EWR ",
  },
];

const category = [
  "TS escort",
  "Female escort",
  "Male for male escort",
  "DOM / Fetish provider",
  "Male for female escort",
  "Massage or massage studio",
  "Web / Snap entertainer",
];

const FormSchema = z.object({
  state: z.string({
    required_error: "Please select a state",
  }),
  city: z.string({
    required_error: "Please select a city",
  }),
  category: z.string({
    required_error: "Please select a category",
  }),
  title: z
    .string()
    .min(10, {
      message: "Title must be at least 10 characters.",
    })
    .max(160, {
      message: "Title must not be longer than 255 characters.",
    }),

  age: z.string().min(1, {
    message: "This field is required",
  }),
  location: z.string().min(1, {
    message: "This field is required",
  }),
  serviceType: z.array(z.string()).optional(),

  postBody: z
    .string({
      required_error: "This field is required",
    })
    .min(10, {
      message: "Post body must be at least 10 characters.",
    })
    .max(1000, {
      message: "Post body must not be longer than 255 characters.",
    }),
  contact: z.string({
    required_error: "Please type your valid number",
  }),
  receiveCall: z.boolean().default(false),
  pictures: z.string().optional(),
  seeClient: z.array(z.string()).optional(),
  workingHours: z.string().optional(),
  paymentMethods: z.array(z.string()).optional(),
  ethnicity: z.array(z.string()).optional(),
  hairColor: z.array(z.string()).optional(),
  tatoo: z.string(),
  bdsmActivity: z.array(z.string()).optional(),
  visibleToGoogle: z.boolean().default(false),
  disclaimer: z.boolean().default(false),
});

type Categories = Array<{
  id: number;
  name: string;
}>;

export default function Post() {
  const [cities, setCities] = useState<string[]>([]);
  const [categories, setCategories] = useState<Categories>([]);

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      state: "",
      paymentMethods: [],
      ethnicity: [],
      bdsmActivity: [],
      serviceType: [],
      hairColor: [],
      seeClient: [],
      pictures: "",
    },
  });

  if (
    form.getValues().state !== "" &&
    form.getValues().city !== "" &&
    form.getValues().category !== ""
  ) {
    console.log("first");
  }

  function onSubmit(data: z.infer<typeof FormSchema>) {
    console.log(data);
  }

  const filterCities = (state: any) => {
    const citiesInNewYork: string[] = usaStatesAndCity[state];
    setCities(citiesInNewYork);
  };

  const checkState = form.getValues("state") === "" ? true : false;

  useEffect(() => {
    const getCategory = async () => {
      try {
        const response = await axios.get("/api/category");
        setCategories(response.data);
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    getCategory();
  }, []);

  return (
    <div className="max-w-5xl px-4 mx-auto h-full py-10">
      <h1 className="text-2xl md:text-3xl text-slate-700 mb-3">
        Create your post
      </h1>
      <p className="text-slate-600 mb-6 md:mb-10 text-sm">
        First time here? Your account will be created along with your first
        post.
      </p>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="grid md:grid-cols-2">
            <div className="w-full grid grid-cols-2 gap-4 mb-10">
              <p className="col-span-2 text-slate-700">
                1.Where would you like to post?
              </p>
              <FormField
                control={form.control}
                name="state"
                render={({ field }) => (
                  <FormItem className="col-span-1 ml-4">
                    <FormLabel className="font-normal">State</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        filterCities(value);
                        field.onChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {Object.keys(usaStatesAndCity).map((state) => {
                          return (
                            <SelectItem key={state} value={state}>
                              {state}
                            </SelectItem>
                          );
                        })}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name="city"
                render={({ field }) => (
                  <FormItem className="col-span-1">
                    <FormLabel className="font-normal">City</FormLabel>
                    <Select
                      disabled={checkState}
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Please select" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {cities.map((city: string) => (
                          <SelectItem key={city} value={city}>
                            {city}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <p className="text-[10px] ml-4 col-span-2 mb-4">
                If you want your city or area added to the list, please write to
                <span className="text-primary ml-1">
                  support@skipthegames.com
                </span>
              </p>
              <p className="col-span-2 text-slate-700">
                2.In what category would you like to post?
              </p>
              <FormField
                control={form.control}
                name="category"
                render={({ field }) => (
                  <FormItem className="col-span-2 ml-4">
                    <FormLabel className="font-normal">Category</FormLabel>
                    <Select
                      onValueChange={(value) => {
                        field.onChange(value);
                      }}
                      defaultValue={field.value}
                    >
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Looking for a" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        {categories.map(({ id, name }) => (
                          <SelectItem key={id} value={`${id}`}>
                            {name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>

                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>
            <div className="flex flex-col items-center ">
              <h1 className="text-2xl mb-2 ">Already Registered</h1>
              <Button className="w-full max-w-[15rem]">
                <Link href={"/sign-in"}>Login To Your Account</Link>
              </Button>
            </div>
          </div>

          <AdRules />

          <div className="mt-10">
            <Accordion
              className="w-full mt-10 flex flex-col gap-3"
              type="multiple"
              defaultValue={[
                "item-1",
                "item-2",
                "item-3",
                "item-4",
                "item-5",
                "item-6",
              ]}
            >
              <FormAccordion title="Must have info" value="item-1">
                {formData.map(
                  ({ title, value, placeholder, type, description }) => (
                    <FormField
                      key={value}
                      control={form.control}
                      name={value}
                      render={({ field }) => (
                        <InputWithLabel
                          placeholder={placeholder}
                          label={title}
                          formMessage={<FormMessage />}
                          field={field}
                          required
                          type={type}
                          description={description}
                        />
                      )}
                    />
                  )
                )}

                <FormField
                  control={form.control}
                  name="serviceType"
                  render={({ field }) => (
                    <FormItem className="space-y-3">
                      <FormControl>
                        <MultipleCheckbox
                          field={field}
                          data={["man", "woman", "other"]}
                          title="What services do you offer?"
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="postBody"
                  render={({ field }) => (
                    <InputWithLabel
                      placeholder=""
                      label="Write the body of your post"
                      formMessage={<FormMessage />}
                      field={field}
                      required
                      textArea
                    />
                  )}
                />
              </FormAccordion>

              <FormAccordion title="Contact" value="item-2">
                <FormField
                  control={form.control}
                  name="contact"
                  render={({ field }) => (
                    <InputWithLabel
                      placeholder="000-999-0099"
                      label="Your phone number"
                      formMessage={<FormMessage />}
                      field={field}
                      required
                      type="text"
                    />
                  )}
                />

                <FormField
                  control={form.control}
                  name="receiveCall"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PrivacyCheckbox
                          id="receiveCall"
                          title={
                            " I want to be able to receive phone inquiries from my ad (Your phone number is protected automatically)."
                          }
                          field={field}
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </FormAccordion>

              <FormAccordion title="Your pictures" value="item-3">
                <div className="py-4 space-y-6">
                  <p className="text-slate-700">
                    The first 3 photos with stars will show in the Gallery
                    search results layout. A photo with the yellow star will
                    show in the Single search results layout. All images will be
                    shown in the ad.
                  </p>

                  <div className="grid md:grid-cols-5 gap-4">
                    <FormField
                      control={form.control}
                      name="pictures"
                      render={({ field }) => (
                        <Input id="pictures" multiple type="file" {...field} />
                      )}
                    />
                  </div>
                </div>
              </FormAccordion>

              <FormAccordion title="Nice to have info" value="item-4">
                <Accordion
                  defaultValue={["item-1", "item-2", "item-3", "item-4"]}
                  type="multiple"
                  className="space-y-4"
                >
                  <FormAccordion title="Service details" value="item-1">
                    <FormField
                      control={form.control}
                      name="seeClient"
                      render={({ field }) => (
                        <FormItem className="space-y-3">
                          <FormControl>
                            <MultipleCheckbox
                              field={field}
                              data={["incall", "outcall", "both"]}
                              title="Where can you see your clients?"
                              formMessage={<FormMessage />}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="workingHours"
                      render={({ field }) => (
                        <InputWithLabel
                          placeholder="24/7"
                          label="What are your work hours?"
                          formMessage={<FormMessage />}
                          field={field}
                          type="text"
                        />
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="paymentMethods"
                      render={({ field }) => (
                        <CheckboxWithLabel
                          data={paymentMethods}
                          title="What payment method do you accept?"
                          field={field}
                        />
                      )}
                    />
                  </FormAccordion>

                  <FormAccordion title="Physical" value="item-2">
                    <FormField
                      control={form.control}
                      name="ethnicity"
                      render={({ field }) => (
                        <CheckboxWithLabel
                          data={ethnicityOptions}
                          title="Your race / ethnicity"
                          field={field}
                        />
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="hairColor"
                      render={({ field }) => (
                        <MultipleCheckbox
                          data={hairColorOptions}
                          title="Hair color"
                          field={field}
                        />
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="tatoo"
                      render={({ field }) => (
                        <SingleCheckbox
                          field={field}
                          data={["none", "discreet", "very visible or many"]}
                          title="Tatoo"
                        />
                      )}
                    />
                  </FormAccordion>
                </Accordion>
              </FormAccordion>
              <FormAccordion title="Activities you might enjoy" value="item-5">
                <FormField
                  control={form.control}
                  name="bdsmActivity"
                  render={({ field }) => (
                    <CheckboxWithLabel
                      data={fetishOptions}
                      title="BDSM activities"
                      field={field}
                    />
                  )}
                />
              </FormAccordion>

              <FormAccordion title="Privacy and legal" value="item-6">
                <FormField
                  control={form.control}
                  name="visibleToGoogle"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PrivacyCheckbox
                          field={field}
                          id="visibleToGoogle"
                          title="I want my ad to be visible to search engine such as google."
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="disclaimer"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <PrivacyCheckbox
                          field={field}
                          id="disclaimer"
                          title="I want my ad to have a legal disclaimer at the bottom."
                        />
                      </FormControl>
                    </FormItem>
                  )}
                />
              </FormAccordion>
            </Accordion>
          </div>

          <Button size={"lg"} type="submit">
            Submit
          </Button>
        </form>
      </Form>
    </div>
  );
}
