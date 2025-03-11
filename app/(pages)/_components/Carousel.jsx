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
import { useEffect, useState } from "react";

const images = ["/mouseio.jpg", "/parathrhthrio.jpg", "/plateia.jpg"];

export default function CarouselHomePage() {
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
      opts={{ loop: true }}
      className="w-[80%] lg:w-[50%] mx-auto"
      plugins={[
        Autoplay({
          delay: 5000,
        }),
      ]}
    >
      <CarouselContent>
        {images.map((image) => (
          <CarouselItem key={image}>
            <div className="relative mx-auto h-[200px] lg:h-[400px]">
              <Image
                className="rounded-[5px]"
                priority
                src={image}
                fill
                style={{ objectFit: "cover" }}
                alt={`Carousel image`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious className="hidden lg:block" />
      <CarouselNext className="hidden lg:block" />
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
