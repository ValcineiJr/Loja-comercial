"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRightIcon } from "../utils/icons";

import cn from "classnames";

const Carousel = ({ title, subTitle, children, gap = 1, hasButton = true }) => {
  const maxScrollWidth = useRef(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const carousel = useRef(null);

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1);
    }
  };

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1);
    }
  };

  const isDisabled = (direction) => {
    if (direction === "prev") {
      return currentIndex <= 0;
    }

    if (direction === "next" && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      );
    }

    return false;
  };

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex;
    }
  }, [currentIndex]);

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0;
  }, []);

  return (
    <div className="carousel my-12 mx-auto">
      <div className="flex gap-2 items-center mb-6">
        <div className="w-5 h-10 bg-secondary rounded"></div>
        <h3 className="text-secondary text-base font-semibold">{title}</h3>
      </div>

      <div className="flex justify-between items-center mb-8">
        <h2 className="text-4xl leading-8 font-semibold  text-slate-700">
          {subTitle}
        </h2>
        <div className="flex gap-5 ">
          <button
            onClick={movePrev}
            disabled={isDisabled("prev")}
            className="disabled:cursor-not-allowed"
          >
            <ArrowRightIcon
              className={cn(
                { "text-black/50": isDisabled("prev") },
                "rotate-180"
              )}
              size={30}
            />
          </button>
          <button
            onClick={moveNext}
            className="disabled:cursor-not-allowed"
            disabled={isDisabled("next")}
          >
            <ArrowRightIcon
              size={30}
              className={cn({ "text-black/50": isDisabled("next") })}
            />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden">
        <div
          ref={carousel}
          className={`carousel-container relative flex gap-${gap} overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0`}
        >
          {children}
        </div>
        {hasButton && (
          <a
            href="#"
            className="bg-secondary max-w-56 mx-auto flex items-center p-2 justify-center rounded text-white font-medium text-base mt-9"
          >
            Ver todos os produtos
          </a>
        )}
      </div>
    </div>
  );
};

export default Carousel;
