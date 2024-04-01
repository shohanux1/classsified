import * as React from "react";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";

export function PostCarousel() {
  return (
    <Carousel className="w-full max-w-md">
      <CarouselContent>
        {Array.from({ length: 5 }).map((_, index) => (
          <CarouselItem key={index}>
            <div className="">
              <Card>
                <CardContent className="flex aspect-square items-center justify-center p-0">
                  <Image
                    src={
                      "https://images.pexels.com/photos/1308881/pexels-photo-1308881.jpeg?auto=compress&cs=tinysrgb&w=800"
                    }
                    alt="Post Image"
                    height={100}
                    width={100}
                    className="w-full h-full object-cover rounded-md shadow"
                  />
                </CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
