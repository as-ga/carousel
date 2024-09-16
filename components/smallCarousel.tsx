"use client";
import React from "react";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

interface Props {
  items: string[];
}

export function SmallCarousel({ items }: Props) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  );

  return (
    <Carousel
      plugins={[plugin.current]}
      className="h-full"
      // onMouseEnter={plugin.current.stop}
      onMouseLeave={plugin.current.reset}
    >
      <CarouselContent>
        {items.map((url, item) => (
          <CarouselItem key={item}>
            <div className="h-full flex flex-col justify-center align-items-center ">
              <Image
                className="w-full h-full object-cover mb-10 border-2 rounded-xl shadow-white shadow-md"
                src={url}
                height={500}
                width={500}
                alt={url}
              />
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
      {/* <CarouselPrevious />
        <CarouselNext /> */}
    </Carousel>
  );
}
