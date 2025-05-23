"use client";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function CarouselHomePage({ opts, images }) {
  const pathname = usePathname();
  let lgWidth = "lg:w-[50%]";

  if (pathname.includes("ekdilosi")) lgWidth = "lg:w-[75%]";
  if (pathname.includes("mouseio")) lgWidth = "lg:w-[75%]";
  const [dotIndex, setDotIndex] = useState(0);
  const [api, setApi] = useState(null);

  useEffect(() => {
    if (!api) {
      return;
    }

    const onSelect = () => {
      setDotIndex(api.selectedScrollSnap());
    };

    api.on("select", onSelect);

    return () => {
      api.off("select", onSelect);
    };
  }, [api]);

  const handleDotClick = (index) => {
    if (api) api.scrollTo(index);
  };

  return (
    <Carousel
      setApi={setApi}
      opts={opts}
      className={`w-[80%] ${lgWidth} mx-auto`}
      plugins={[
        Autoplay({
          delay: 4500,
          stopOnInteraction: false,
          stopOnMouseEnter: true,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <div className="relative mx-auto h-[200px] lg:h-[400px]">
              <Image
                className="rounded-[5px] object-contain"
                priority
                src={image}
                fill
                alt={`Carousel image`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:grid lg:place-items-center" />
      <CarouselNext className="hidden lg:grid lg:place-items-center" />
      <div className="grid place-items-center p-2">
        <div className="flex gap-2 mx-auto">
          {images.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full border border-primary ${
                dotIndex === index ? "bg-primary" : ""
              } cursor-pointer`}
              onClick={() => handleDotClick(index)}
            ></div>
          ))}
        </div>
      </div>
    </Carousel>
  );
}
