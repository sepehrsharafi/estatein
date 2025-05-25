"use client";

import Image from "next/image";
import Button from "../Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { useEffect, useRef, useState } from "react";
import type { Swiper as SwiperType } from "swiper";
import { NavigationOptions } from "swiper/types";
import { Card } from "@/mock/featured-Properties";
import { ClientSaysCard } from "@/mock/what-Our-Clients-Say";
import PropertiesCard from "./Cards/PropertiesCard";
import WhatOurClientsSaysCard from "./Cards/WhatOurClientsSay";

interface CardListingProps {
  title: string;
  description?: string;
  cards: Card[] | ClientSaysCard[];
}
function isCardArray(cards: Card[] | ClientSaysCard[]): cards is Card[] {
  return cards.length > 0 && "price" in cards[0];
}

function isClientSaysCardArray(
  cards: Card[] | ClientSaysCard[]
): cards is ClientSaysCard[] {
  return cards.length > 0 && "stars" in cards[0];
}

const CardListing = ({ title, description, cards }: CardListingProps) => {
  const prevRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const swiperRef = useRef<SwiperType | null>(null);
  const [currentSlide, setCurrentSlide] = useState(1);
  const [isDesktop, setIsDesktop] = useState(false);
  const totalSlides = cards.length;
  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  useEffect(() => {
    if (
      swiperRef.current &&
      prevRef.current &&
      nextRef.current &&
      typeof swiperRef.current.params.navigation === "object"
    ) {
      const navigation = swiperRef.current.params
        .navigation as NavigationOptions;

      navigation.prevEl = prevRef.current;
      navigation.nextEl = nextRef.current;

      swiperRef.current.navigation.destroy();
      swiperRef.current.navigation.init();
      swiperRef.current.navigation.update();
    }
  }, []);
  console.log(typeof cards);
  return (
    <section className="flex flex-col gap-10 mx-4 mt-20 xl:mx-[80px] 2xl:mx-[162px]">
      <div className="flex flex-row justify-between items-center">
        <div className="flex flex-col gap-1.5">
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

      <div className="overflow-hidden">
        <Swiper
          spaceBetween={16}
          slidesPerView={1}
          slidesPerGroup={1}
          modules={[Navigation]}
          speed={300}
          resistanceRatio={0.85}
          touchRatio={1}
          threshold={5}
          followFinger={true}
          grabCursor={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              slidesPerGroup: 1,
            },
            1024: {
              slidesPerView: 3,
              slidesPerGroup: 1,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          onSlideChange={(swiper) => {
            setCurrentSlide(swiper.activeIndex + 1);
          }}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
            disabledClass: "opacity-50 cursor-not-allowed",
          }}
        >
          {isCardArray(cards) &&
            cards.map((card, index) => (
              <SwiperSlide key={index}>
                <PropertiesCard card={card} />
              </SwiperSlide>
            ))}
          {isClientSaysCardArray(cards) &&
            cards.map((card, index) => (
              <SwiperSlide key={index}>
                <WhatOurClientsSaysCard card={card} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>

      <div className="flex flex-row gap-2.5 justify-between items-center border-t border-[#262626] pt-5">
        <Button variant="secondary" className="md:hidden">
          View All Properties
        </Button>
        <p className="text-sm hidden md:block text-white">
          {String(isDesktop ? currentSlide + 2 : currentSlide).padStart(2, "0")}{" "}
          of {String(totalSlides).padStart(2, "0")}
        </p>
        <div className="flex flex-row items-center text-white gap-2">
          <button
            ref={prevRef}
            className="p-2.5 cursor-pointer bg-[#141414] border-[#262626] border hover:bg-[#292929] rounded-full"
          >
            <Image
              src="/icons/arrow.svg"
              alt="Previous slide"
              width={24}
              height={24}
            />
          </button>
          <p className="text-sm md:hidden">
            {String(currentSlide).padStart(2, "0")} of{" "}
            {String(totalSlides).padStart(2, "0")}
          </p>
          <button
            ref={nextRef}
            className="p-2.5 cursor-pointer bg-[#141414] border-[#262626] border hover:bg-[#292929] rounded-full"
          >
            <Image
              src="/icons/arrow.svg"
              className="rotate-180"
              alt="Next slide"
              width={24}
              height={24}
            />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CardListing;
