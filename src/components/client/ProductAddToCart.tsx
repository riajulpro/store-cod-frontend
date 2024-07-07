"use client";

import { addCart } from "@/redux/features/cart/cart.slice";
import { addWishlist } from "@/redux/features/wishlist/wishlist.slice";
import { useAppDispatch } from "@/redux/hook";
import { IProduct } from "@/types/product";
import { Heart } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ProductAddToCart = ({ data }: { data: IProduct }) => {
  const [currentSize, setCurrentSize] = useState<string>("50g");
  const [quantity, setQantity] = useState<string>("1");
  const dispatch = useAppDispatch();

  const sizes = ["50g", "60g", "80g", "100g", "150g"];

  const addToCart = () => {
    const body = {
      id: data._id!,
      photo: data.photo,
      name: data.name,
      rating: data.averageRating,
      price: data.discountPrice,
      quantity: quantity,
    };

    dispatch(addCart(body));

    toast.success("Cart added successfully!");
    console.log("You are about to add these", body);
  };

  const handleWishlist = () => {
    const body = {
      id: data._id!,
      photo: data.photo,
      name: data.name,
      rating: data.averageRating,
      price: data.discountPrice,
      quantity: quantity,
    };

    dispatch(addWishlist(body));

    toast.success("Wishlist added successfully!");
    console.log("You are about to add these", body);
  };

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
          onChange={(e) => setQantity(e.target.value)}
        />
        <button
          className="flex-1 bg-green-500 hover:bg-green-600 text-white font-medium p-3 rounded-md"
          onClick={addToCart}
        >
          Add to cart
        </button>
        <button
          className="p-3 rounded-md border bg-white group hover:text-white hover:bg-green-500"
          onClick={handleWishlist}
        >
          <Heart className="text-green-500 group-hover:text-white" />
        </button>
      </div>
    </>
  );
};

export default ProductAddToCart;
