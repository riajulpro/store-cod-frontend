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
const Categories = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 10,
    slidesToScroll: 10,
    initialSlide: 0,
    nextArrow: <span id="next" className="invisible" />,
    prevArrow: <span id="prev" className="invisible" />,
    responsive: [
      {
        breakpoint: 1440,
        settings: {
          slidesToShow: 8,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 5,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 5,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
        },
      },
    ],
  };

  const nextSlides = () => {
    const nextBtn = document.getElementById("next");
    if (!nextBtn) return;
    nextBtn.click();
  };
  const prevSlides = () => {
    const prevBtn = document.getElementById("prev");
    if (!prevBtn) return;
    prevBtn.click();
  };

  return (
    <section className="mt-[50px] w-full">
      <h2 className="text-[25px] text-primaryTxt font-[700] mb-[20px]">
        Top Categories
      </h2>
      <Slider {...settings}>
        {productCategories.map((data, i) => (
          <CategoryCard data={data} key={i + "string"} />
        ))}
      </Slider>
      <div className="w-full flex justify-end mt-[20px]">
        <div className="center gap-[10px]">
          <button
            onClick={prevSlides}
            className="text-stone-400 bg-[#f3f3f3] hover:bg-green-500 hover:text-white duration-75 w-[35px] h-[35px] center rounded-full"
          >
            <ArrowLeft />
          </button>
          <button
            onClick={nextSlides}
            className="text-stone-400 bg-[#f3f3f3] hover:bg-green-500 hover:text-white duration-75 w-[35px] h-[35px] center rounded-full"
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
