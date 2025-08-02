"use client";
import React from "react";
import { EmblaOptionsType } from "embla-carousel";
import { PrevButton, NextButton, usePrevNextButtons } from "./ArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import Button from "../Button";

type PropType = {
  options?: EmblaOptionsType;
  children?: React.ReactNode;
  title?: string;
  description?: string;
};

const Slider: React.FC<PropType> = (props) => {
  const { options, children, title, description } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla mt-20" dir="rtl">
      <div className="flex flex-row justify-between items-center mb-20">
        <Button variant="secondary" className="hidden md:block">
          View All Properties
        </Button>
        <div
          className="flex flex-col gap-1.5 text-left max-w-[900px]"
          style={{ direction: "ltr" }}
        >
          <h2 className="text-[28px] text-white xl:text-[38px]">{title}</h2>
          {description && (
            <p className="text-[14px] xl:text-[16px] text-[#999999] ">
              {description}
            </p>
          )}
        </div>
      </div>
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">{children}</div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default Slider;
