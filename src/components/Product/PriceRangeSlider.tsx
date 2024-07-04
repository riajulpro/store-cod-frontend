"use client";
import React from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";

interface PriceRangeSliderProps {
  minPrice: number;
  maxPrice: number;
  priceRange: [number, number];
  setPriceRange: (values: [number, number]) => void;
}

const PriceRangeSlider: React.FC<PriceRangeSliderProps> = ({ minPrice, maxPrice, priceRange, setPriceRange }) => {

  const handlePriceChange = (values: [number, number]) => {
    console.log("pricerange", values);
    
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
