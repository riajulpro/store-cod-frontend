"use client";

import { addCart } from "@/redux/features/cart/cart.slice";
import { useAppDispatch } from "@/redux/hook";
import { IProduct } from "@/types/product";
import { Eye, ReceiptText, ShoppingCart } from "lucide-react";
import Link from "next/link";
import { toast } from "sonner";

const ProductTooltip = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  const handleAddToCart = () => {
    const body = {
      id: product._id!,
      photo: product.photo,
      name: product.name,
      rating: product.averageRating,
      price: product.discountPrice,
      quantity: "1",
    };

    dispatch(addCart(body));
    console.log("You are about to add these", body);
    toast.success("Cart added");
    console.log(product);
  };
  return (
    <div
      className="absolute top-[-100%] left-0 backdrop-blur-sm w-full h-full center  group-hover/image:top-0 overflow-hidden"
      style={{ transition: "0.3s" }}
    >
      <div className="flex items-center justify-center border-[1px] border-primaryMat bg-white rounded-[3px] overflow-hidden p-[5px]">
        <button
          className="p-[5px] border-x-[1px] border-borderColor hover:bg-[#f0f0f0]"
          onClick={handleAddToCart}
        >
          <ShoppingCart />
        </button>
        <button className="p-[5px] border-r-[1px] border-borderColor hover:bg-[#f0f0f0]">
          <ReceiptText />
        </button>
        <Link
          href={`/product/details/${product._id}`}
          className="p-[5px] border-r-[1px] border-borderColor hover:bg-[#f0f0f0]"
        >
          <Eye />
        </Link>
      </div>
    </div>
  );
};

export default ProductTooltip;
