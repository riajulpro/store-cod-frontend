"use client";
import { IProduct } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
const ProductAddToCartBtn = ({ product }: { product: IProduct }) => {
  const handleAddToCart = () => {
    toast.success("Cart added");
    console.log(product);
  };
  return (
    <button
      className="center gap-[5px] rounded-[5px] w-[90%] mx-auto bg-primaryMat text-white font-bold py-2 prounded hover:bg-green-700 group/cart overflow-hidden"
      onClick={handleAddToCart}
    >
      Add
      <ShoppingCart
        className="left-0 group-hover/cart:left-[150px] group-hover/cart:rotate-[-15deg] relative"
        style={{ transition: "0.5s" }}
      />
    </button>
  );
};

export default ProductAddToCartBtn;
