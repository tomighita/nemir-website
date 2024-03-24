import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel.tsx";
import { AspectRatio } from "@/components/ui/aspect-ratio.tsx";

export default function CustomCarousel(props: { sources: string[] }) {
  return (
    <Carousel>
      <CarouselContent>
        {props.sources.map((curr_img, index) => (
          <CarouselItem key={index}>
            <div className="p-1">
              <img
                src={curr_img}
                alt={"alt"}
                className="rounded-md m-auto object-cover"
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
