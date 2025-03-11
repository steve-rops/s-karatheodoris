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

const images = ["/mouseio.jpg", "/parathrhthrio.jpg", "/plateia.jpg"];

export default function CarouselHomePage() {
  return (
    <Carousel
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
                preload="true"
                src={image}
                fill
                style={{ objectFit: "cover" }}
                alt={`${image}`}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      <CarouselPrevious />
      <CarouselNext />
    </Carousel>
  );
}
