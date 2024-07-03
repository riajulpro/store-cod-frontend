"use client";
import { productCategories } from "@/mock/productCategory";
import { IProductCategory } from "@/types/product";
import { getRandomInteger } from "@/utils/getRandomInteger";
import { ArrowLeft, ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import Slider from "react-slick";
// import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import SectionHeading from "../ui/sectionHeading";
import { categorySliderSettings } from "./homeUtils";
const Categories = () => {
  const nextSlides = () => {
    // slider settings =>{ nextArrow: <span id="next" className="invisible" />}
    const nextBtn = document.getElementById("next");
    if (!nextBtn) return;
    nextBtn.click();
  };
  const prevSlides = () => {
    // slider settings =>{ prevArrow: <span id="prev" className="invisible" />}
    const prevBtn = document.getElementById("prev");
    if (!prevBtn) return;
    prevBtn.click();
  };

  return (
    <section className="mt-[50px] w-full">
      <SectionHeading text="Top Categories" />
      <Slider {...categorySliderSettings}>
        {productCategories.map((data, i) => (
          <CategoryCard data={data} key={i + "string"} />
        ))}
      </Slider>
      <div className="w-full flex justify-end mt-[20px]">
        <div className="center gap-[10px]">
          <button
            onClick={prevSlides}
            className="text-stone-400 bg-[#f3f3f3] hover:bg-primaryMat hover:text-white duration-75 w-[35px] h-[35px] center rounded-full"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextSlides}
            className="text-stone-400 bg-[#f3f3f3] hover:bg-primaryMat hover:text-white duration-75 w-[35px] h-[35px] center rounded-full"
          >
            <ArrowRight />
          </button>
        </div>
      </div>
    </section>
  );
};

function CategoryCard({ data }: { data: IProductCategory }) {
  const [color, setColor] = useState<string>("");
  useEffect(() => {
    const colors = ["#ecffec", "#fffceb", "#fff3ff", "#feefea"];
    const numb = getRandomInteger(3);
    setColor(colors[numb]);
  }, []);
  return (
    <Link
      href={`/product?category=${data.label}`}
      className="w-[120px] h-[180px] center flex-col gap-[15px] rounded-[8px] hover:shadow-lg hover:border-primaryTxt border-[1px] border-transparent duration-[0.3s]"
      style={{ background: color }}
    >
      <Image
        src={data.image}
        width={84}
        height={84}
        className="w-[84px] h-auto object-cover"
        alt="category"
      />
      <div className="flex-col gap-[5px] center ">
        <h5 className="text-[15px] leading-[20px] text-center text-primaryTxt font-[600]">
          {data.value}
        </h5>
        <p>Items: {data.count}</p>
      </div>
    </Link>
  );
}

export default Categories;
