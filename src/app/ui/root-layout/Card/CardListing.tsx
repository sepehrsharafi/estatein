"use client";

import Image from "next/image";
import Button from "../Button";
import PropertiesCard from "./PropertiesCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";

interface CardListingProps {
  title: string;
  description?: string;
  cards?: Array<Record<string, string | number>>;
}
const CardListing = ({ title, description }: CardListingProps) => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [navigationReady, setNavigationReady] = useState(false);

  useEffect(() => {
    // Wait for refs to be attached
    setNavigationReady(true);
  }, []);
  return (
    <>
      <section className="flex flex-col gap-10 mx-4 mt-20 xl:mx-[80px] 2xl:mx-[162px] ">
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-1.5 ">
            <h2 className="text-[28px] text-white xl:text-[38px]">{title}</h2>
            {description && (
              <p className="text-[14px] xl:text-[16px] text-[#999999]">
                {description}
              </p>
            )}
          </div>
          <Button variant="secondary" className="hidden md:block">
            View All Properties
          </Button>
        </div>
        <div className="overflow-hidden ">
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            modules={[Navigation]}
            breakpoints={{
              640: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            navigation={
              navigationReady
                ? {
                    prevEl: prevRef.current,
                    nextEl: nextRef.current,
                  }
                : undefined
            }
            onBeforeInit={(swiper) => {
              if (prevRef.current && nextRef.current) {
                // @ts-ignore
                swiper.params.navigation.prevEl = prevRef.current;
                // @ts-ignore
                swiper.params.navigation.nextEl = nextRef.current;
              }
            }}
          >
            {[...Array(38)].map((_, index) => (
              <SwiperSlide key={index} className="">
                <PropertiesCard />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        <div className="flex flex-row gap-2.5 justify-between items-center border-t border-[#262626] pt-5">
          <Button variant="secondary" className="md:hidden">
            View All Properties
          </Button>
          <p className="text-sm hidden md:block text-white">01 of 60</p>
          <div className="flex flex-row items-center text-white gap-2">
            <button
              ref={prevRef}
              className="p-2.5 cursor-pointer bg-[#141414] border-[#262626] border hover:bg-[#292929] rounded-full"
            >
              <Image
                src="/icons/arrow.svg"
                alt="arrow"
                width={24}
                height={24}
              />
            </button>
            <p className="text-sm md:hidden">01 of 60</p>
            <button
              ref={nextRef}
              className="p-2.5 cursor-pointer bg-[#141414] border-[#262626] border hover:bg-[#292929] rounded-full"
            >
              <Image
                src="/icons/arrow.svg"
                className="rotate-180"
                alt="arrow"
                width={24}
                height={24}
              />
            </button>
          </div>
        </div>
      </section>
    </>
  );
};
export default CardListing;
