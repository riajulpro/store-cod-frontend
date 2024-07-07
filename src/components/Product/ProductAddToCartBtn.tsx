"use client";
import { addCart } from "@/redux/features/cart/cart.slice";
import { useAppDispatch } from "@/redux/hook";
import { IProduct } from "@/types/product";
import { ShoppingCart } from "lucide-react";
import { toast } from "sonner";
const ProductAddToCartBtn = ({ product }: { product: IProduct }) => {
  const dispatch = useAppDispatch();

  console.log("Product ID: ", product._id);

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
