"use client";

import { ArrowLeft, ArrowRight } from "lucide-react";
import { useEffect, useState } from "react";
import SubscribeInput from "../shared/SubscribeInput";
import { bgImageStyle, renderNewLine } from "./homeUtils";
const slides = [
  {
    image: "/images/hero1.png",
    head: `Don’t miss amazing\ngrocery deals`,
    desc: `Save up to 50% on your first order`,
  },
  {
    image: "/images/hero2.png",
    head: `Get Daily\nBest deals`,
    desc: `Get super fast delivery every time`,
  },
];
const Banner = () => {
  const [selected, setSelected] = useState<number>(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setSelected((prevSelected) => (prevSelected + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    const length = slides.length;
    const lastIndex = length - 1;

    if (selected === 0) {
      return setSelected(lastIndex);
    }
    setSelected(selected - 1);
  };

  return (
    <section className="w-full flex flex-col items-end mt-[20px]">
      <div className="w-full h-[300px] sm:h-[350px] lg:h-[500px] relative overflow-hidden rounded-[20px] ">
        {slides.map(({ desc, head, image }, i) => (
          <div
            key={i + "slide"}
            className={`w-full h-full absolute top-0 left-0 z-30 bg-green-300 flex flex-col justify-center pr-[30px] pl-[30px] lg:pl-[50px] ${
              i === selected ? "opacity-1" : "opacity-0"
            } duration-[0.3s]`}
            style={{
              backgroundImage: `url(${image})`,
              ...bgImageStyle,
              transition: "0.5s",
            }}
          >
            <div className="flex flex-col gap-[25px]" key={i + "slide"}>
              <h1 className="text-[25px] sm:text-[40px] md:text-[60px] font-[700] md:leading-[72px] text-primaryTxt">
                {renderNewLine(head)}
              </h1>
              <p className="text-[18px] md:text-[25px] font-[500]">{desc}</p>

              <SubscribeInput />
            </div>
          </div>
        ))}
      </div>
      <div className="w-[50%] flex items-center justify-between mt-[20px]">
        <div className="center gap-[10px]">
          {slides.map((_, i) => (
            <button
              onClick={() => setSelected(i)}
              className={`w-[15px] h-[15px] rounded-full border-[1px] ${
                selected === i ? "bg-primaryMat" : ""
              }`}
              key={i + "slideBtn"}
            />
          ))}
        </div>
        <div className="center gap-[10px]">
          <button
            onClick={prevSlide}
            className="text-stone-400 bg-[#f3f3f3] hover:bg-primaryMat hover:text-white duration-75 w-[35px] h-[35px] center rounded-full"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={() =>
              setSelected((prevSelected) => (prevSelected + 1) % slides.length)
            }
            className="text-stone-400 bg-[#f3f3f3] hover:bg-primaryMat hover:text-white duration-75 w-[35px] h-[35px] center rounded-full"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Banner;
