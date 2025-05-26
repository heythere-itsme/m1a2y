import * as React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "./ui/carousel";



export default function ImageCarousel({images}) {
  const [api, setApi] = React.useState<CarouselApi | null>(null);

  return (
    <div className="w-full flex justify-center">
      <Carousel
        setApi={setApi}
        opts={{ loop: true, align: "center" }}
        className="w-[1200px] relative py-10"
      >
        <CarouselContent>
          {images.map((img, index) => (
            <CarouselItem
              key={index}
              className="basis-1/3 flex justify-center"
              onClick={() => api?.scrollTo(index)}
            >
              <img
                src={img}
                alt={`Image ${index + 1}`}
                className="w-[480px] h-[280px] object-cover rounded-xl border cursor-pointer"
              />
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>
  );
}
