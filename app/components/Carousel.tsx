"use client";

import { useState, useRef, useEffect } from "react";
import { ArrowRightIcon, FillStartIcon, HeartIcon } from "../utils/icons";

import cn from "classnames";

const Carousel = ({ title, data }) => {
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
          Vendas Relâmpago
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
          className="carousel-container relative flex gap-1 overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0"
        >
          {data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className="carousel-item text-center relative w-80 h-96 snap-start "
              >
                <a
                  href={resource.link}
                  className="h-full w-full aspect-square block bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0"
                  style={{ backgroundImage: `url(${resource.imageUrl || ""})` }}
                >
                  <img
                    src={resource.imageUrl || ""}
                    alt={resource.title}
                    className="w-full aspect-square hidden"
                  />
                </a>
                <a
                  href={resource.link}
                  className=" h-full w-full aspect-square block absolute top-0 left-0 p-4 "
                >
                  <div className="flex justify-between mb-2">
                    <div className="bg-secondary rounded  px-2">
                      <span className="text-white text-xs"> -40%</span>
                    </div>
                    <HeartIcon size={30} className="ml-auto  " />
                  </div>
                  <img
                    src="https://github.com/pedroin1.png"
                    alt=""
                    className="max-h-64"
                  />
                  <div className="flex flex-col items-start">
                    <span className="font-medium text-base">
                      HAVIT HV-G92 Gamepad
                    </span>
                    <div className="flex gap-3">
                      <span className="text-base font-medium text-secondary">
                        R$ 120
                      </span>
                      <span className="line-through text-base font-medium text-black/50">
                        R$ 160
                      </span>
                    </div>

                    <div className="flex gap-2 items-center">
                      <FillStartIcon className="text-yellow-500" />
                      <FillStartIcon className="text-yellow-500" />
                      <FillStartIcon className="text-yellow-500" />
                      <FillStartIcon className="text-yellow-500" />
                      <FillStartIcon className="text-yellow-500" />
                      <span className="text-sm font-semibold text-black/50 ">
                        (88)
                      </span>
                    </div>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Carousel;
