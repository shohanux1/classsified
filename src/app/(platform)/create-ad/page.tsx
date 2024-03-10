"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
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

import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

interface City {
  id: number;
  name: string;
  slug: string;
  stateId: number;
}

interface StateProps {
  id: number;
  name: string;
  slug: string;
  cities?: City[] | undefined;
}

interface Option {
  id: number;
  name: string;
}

interface OptionProps {
  bdsm: Option[];
  payment: Option[];
  haircolor: Option[];
  tatoo: any[];
  ethnicity: Option[];
  categories: Option[];
}

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

const FormSchema = z.object({
  state: z.string().min(1, {
    message: "Please select a state",
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
  serviceType: z.array(z.number()).optional(),

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
  pictures: z.array(z.any()).optional(),
  seeClient: z.array(z.number()).optional(),
  workingHours: z.string().optional(),
  paymentMethods: z.array(z.number()).optional(),
  ethnicity: z.array(z.number()).optional(),
  hairColor: z.array(z.number()).optional(),
  tatoo: z.number().optional(),
  bdsmActivity: z.array(z.number()).optional(),
  visibleToGoogle: z.boolean().default(false),
  disclaimer: z.boolean().default(false),
});

export default function Post() {
  const session = useSession();
  const [option, setOption] = useState<OptionProps>();
  const [states, setStates] = useState<StateProps[]>();
  const [cities, setCities] = useState<StateProps[]>();
  const [loading, setloading] = useState(false);

  if (session.status === "unauthenticated") {
    window.location.assign("/sign-in");
  }

  const router = useRouter();

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
    },
  });

  async function onSubmit(data: z.infer<typeof FormSchema>) {
    setloading(true);
    try {
      const {
        state,
        city,
        title,
        age,
        location,
        category,
        serviceType,
        postBody,
        contact,
        receiveCall,
        pictures,
        ethnicity,
        hairColor,
        tatoo,
        seeClient,
        workingHours,
        paymentMethods,
        bdsmActivity,
        visibleToGoogle,
        disclaimer,
      } = data;

      await axios.post(
        "/api/post",
        {
          countryId: 1,
          stateId: Number(state),
          cityId: Number(city),
          title,
          age: Number(city),
          location,
          categoryId: Number(category),
          serviceGender: serviceType,
          postBody,
          contact,
          receiveCall,
          pictures: [""],
          ethnicity,
          hairColor,
          tatoo,
          seeClient,
          workingHours,
          paymentMethods,
          bdsmActivity,
          visibleToGoogle,
          disclaimer,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      setloading(false);
      toast.success("Your post has been successfully created");
      router.push("/my-account");
    } catch (error: any) {
      toast.error(error.message);
      setloading(false);
    }
  }

  const filterCities = (value: any) => {
    const filteredCity = states?.filter((state: any) => {
      return state.id === Number(value);
    });

    if (filteredCity && filteredCity.length > 0) {
      setCities(filteredCity[0].cities);
    }
  };

  const checkState = form.getValues("state") === "" ? true : false;

  const getStates = async () => {
    try {
      const { data } = await axios.get("/api/state");
      setStates(data);
    } catch (error) {
      toast.error(`${error}`);
    }
  };

  useEffect(() => {
    const getOptions = async () => {
      try {
        const { data } = await axios.get("/api/options");
        setOption(data);
      } catch (error) {
        toast.error(`${error}`);
      }
    };

    getStates();
    getOptions();
  }, []);

  function handleFileChange(event: any, field: any) {
    const files = event.target.files;
    const filesArray = Array.from(files);
    field.onChange(filesArray);
  }

  return (
    <div className="max-w-5xl px-4 mx-auto h-full py-5 md:py-10">
      <h1 className="text-2xl md:text-3xl text-slate-700 mb-3">
        Create your post
      </h1>
      <p className="text-slate-600 mb-6 md:mb-10 text-sm">
        First time here? Your account will be created along with your first
        post.
      </p>
      <Form {...form}>
        <form className="space-y-2" onSubmit={form.handleSubmit(onSubmit)}>
          <div className="w-full max-w-lg grid grid-cols-2 gap-4 mb-10">
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
                      {states?.map(
                        ({
                          id,
                          name,
                        }: {
                          id: number;
                          name: string;
                          slug: string;
                        }) => {
                          return (
                            <SelectItem key={id} value={`${id}`}>
                              {name}
                            </SelectItem>
                          );
                        }
                      )}
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
                    onValueChange={field.onChange}
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Please select" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      {cities?.map(({ id, name, slug }) => (
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
                      {option?.categories.map(({ id, name }) => (
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
                          data={[
                            { id: 1, name: "man" },
                            { id: 2, name: "woman" },
                            { id: 3, name: "other" },
                          ]}
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
                        <FormItem>
                          <FormControl>
                            <Input
                              multiple
                              type="file"
                              onChange={(e) => handleFileChange(e, field)}
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
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
                              data={[
                                { id: 1, name: "incall" },
                                { id: 2, name: "outcall" },
                                { id: 3, name: "both" },
                              ]}
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
                          data={option?.payment}
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
                          data={option?.ethnicity}
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
                          data={option?.haircolor}
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
                          data={option?.tatoo}
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
                      data={option?.bdsm}
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

          <Button disabled={loading} size={"lg"} type="submit">
            {loading ? "Please wait..." : "Create Template"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
