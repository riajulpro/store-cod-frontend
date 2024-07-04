"use client";
import React, { useState } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

const PriceRangeSlider: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);
  const minPrice = 0;
  const maxPrice = 10000;

  const handlePriceChange = (values: [number, number]) => {
    setPriceRange(values);
  };

  return (
    <div className="p-5">
      <h3 className="font-semibold mb-6">Filter By Price</h3>
      <RangeSlider
        min={minPrice}
        max={maxPrice}
        defaultValue={[minPrice, maxPrice]}
        value={priceRange}
        onInput={handlePriceChange}
      />
      <div className="flex justify-between mt-2">
        <span>${priceRange[0]}</span>
        <span>${priceRange[1]}</span>
      </div>
    </div>
  );
};

export default PriceRangeSlider;
