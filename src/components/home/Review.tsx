"use client";
import { ArrowLeft, ArrowRight, StarIcon } from "lucide-react";
import Slider from "react-slick";
import ReviewCard from "../Review/ReviewCard";
import { revieSliderSettings } from "../Review/reviewUtils";
import SectionHeading from "../ui/sectionHeading";
const Review = () => {
  const nextSlides = () => {
    const nextBtn = document.getElementById("nextReview");
    if (!nextBtn) return;
    nextBtn.click();
  };
  const prevSlides = () => {
    const prevBtn = document.getElementById("prevReview");
    if (!prevBtn) return;
    prevBtn.click();
  };

  const fillStar = <StarIcon className="h-6 w-6 fill-[#f8d228]" />;
  const strokeStar = <StarIcon className="h-6 w-6  stroke-muted-[#f8d228]" />;

  return (
    <section className="bg-background mt-[50px]">
      <SectionHeading text="What Our Customers Say" />

      <Slider {...revieSliderSettings}>
        {Array.from({ length: 10 }).map((_, i) => (
          <ReviewCard key={"review" + i} />
        ))}
      </Slider>
      <div className="mt-8 md:mt-12 lg:mt-16 flex items-center justify-center">
        <div className="flex items-center gap-2 text-[#f8d228]">
          {fillStar}
          {fillStar}
          {fillStar}
          {fillStar}
          {strokeStar}
          <span className="text-lg font-medium text-[#f8d228]">
            4.2 out of 5
          </span>
        </div>
      </div>
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

export default Review;
