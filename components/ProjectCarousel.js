"use client";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";
import { useCallback, useEffect, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const ProjectCarousel = ({ images, title }) => {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  //   , [
  //   Autoplay({ playOnInit: true, delay: 2 }),
  // ]);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className='embla'>
      <button className='embla__prev' onClick={scrollPrev}>
        <FaArrowLeft />
      </button>
      <div
        className='embla__viewport mx-auto mt-12 h-56 max-w-lg border'
        ref={emblaRef}
      >
        <div className='embla__container h-full'>
          {images.map((src, index) => (
            <div className='embla__slide' key={index}>
              <div className='embla__slide__inner'>
                <Image
                  className='embla__slide__img'
                  src={src}
                  alt={`${title} gallery image ${index + 1}`}
                  width={500}
                  height={300}
                  style={{ objectFit: "contain" }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
      <button className='embla__next' onClick={scrollNext}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default ProjectCarousel;
