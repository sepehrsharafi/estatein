"use client";
import React, {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useState,
} from "react";
import { EmblaCarouselType } from "embla-carousel";

type UsePrevNextButtonsType = {
  prevBtnDisabled: boolean;
  nextBtnDisabled: boolean;
  onPrevButtonClick: () => void;
  onNextButtonClick: () => void;
};

export const usePrevNextButtons = (
  emblaApi: EmblaCarouselType | undefined
): UsePrevNextButtonsType => {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true);
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true);

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollPrev();
  }, [emblaApi]);

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return;
    emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback((emblaApi: EmblaCarouselType) => {
    setPrevBtnDisabled(!emblaApi.canScrollPrev());
    setNextBtnDisabled(!emblaApi.canScrollNext());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;

    onSelect(emblaApi);
    emblaApi.on("reInit", onSelect).on("select", onSelect);
  }, [emblaApi, onSelect]);

  return {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  };
};

type PropType = ComponentPropsWithRef<"button">;

export const PrevButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--prev"
      type="button"
      {...restProps}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M4.5 15C4.5 14.3787 5.00368 13.875 5.625 13.875L21.5819 13.875L15.3453 7.93593C14.8974 7.50529 14.8834 6.79312 15.3141 6.34525C15.7447 5.89738 16.4569 5.88342 16.9047 6.31406L25.1547 14.1891C25.3753 14.4012 25.5 14.694 25.5 15C25.5 15.306 25.3753 15.5988 25.1547 15.8109L16.9047 23.6859C16.4569 24.1166 15.7447 24.1026 15.3141 23.6547C14.8834 23.2069 14.8974 22.4947 15.3453 22.0641L21.5819 16.125L5.625 16.125C5.00368 16.125 4.5 15.6213 4.5 15Z"
          fill="currentColor"
        />
      </svg>

      {children}
    </button>
  );
};

export const NextButton: React.FC<PropType> = (props) => {
  const { children, ...restProps } = props;

  return (
    <button
      className="embla__button embla__button--next"
      type="button"
      {...restProps}
    >
      <svg
        width="30"
        height="30"
        viewBox="0 0 30 30"
        fill="currentColor"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M25.5 15C25.5 15.6213 24.9963 16.125 24.375 16.125L8.41812 16.125L14.6547 22.0641C15.1026 22.4947 15.1166 23.2069 14.6859 23.6548C14.2553 24.1026 13.5431 24.1166 13.0953 23.6859L4.84525 15.8109C4.62466 15.5988 4.5 15.306 4.5 15C4.5 14.694 4.62466 14.4012 4.84525 14.1891L13.0953 6.31406C13.5431 5.88342 14.2553 5.89739 14.6859 6.34525C15.1166 6.79312 15.1026 7.5053 14.6547 7.93594L8.41812 13.875L24.375 13.875C24.9963 13.875 25.5 14.3787 25.5 15Z"
          fill="currentColor"
        />
      </svg>

      {children}
    </button>
  );
};
