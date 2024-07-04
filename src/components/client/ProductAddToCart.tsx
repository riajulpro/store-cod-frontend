"use client";

import { Heart } from "lucide-react";
import { useState } from "react";

const ProductAddToCart = () => {
  const [currentSize, setCurrentSize] = useState<string>("50g");
  const sizes = ["50g", "60g", "80g", "100g", "150g"];

  return (
    <>
      <div className="flex items-center gap-2">
        <span className="font-semibold">Size/Weight:</span>
        <span className="flex items-center gap-2">
          {sizes.map((size, i) => (
            <button
              key={i}
              className={`${
                size === currentSize
                  ? "bg-green-500 text-white font-medium"
                  : "text-light"
              } hover:bg-green-600 hover:text-white p-1 rounded-lg`}
              onClick={() => setCurrentSize(size)}
            >
              {size}
            </button>
          ))}
        </span>
      </div>
      <div className="flex items-center justify-between gap-3">
        <input
          type="number"
          name="quantity"
          id="quantity"
          defaultValue="1"
          className="w-16 p-3 border"
        />
        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium p-3 rounded-md">
          Add to cart
        </button>
        <button className="p-3 rounded-md border bg-white group hover:text-white hover:bg-green-500">
          <Heart className="text-green-500 group-hover:text-white" />
        </button>
      </div>
    </>
  );
};

export default ProductAddToCart;
