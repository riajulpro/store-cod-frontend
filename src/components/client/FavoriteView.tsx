"use client";

import { deleteWishlist } from "@/redux/features/wishlist/wishlist.slice";
import { useAppDispatch, useAppSelector } from "@/redux/hook";
import { Trash } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const FavoriteView = () => {
  const [quantity, setQantity] = useState<string>("");
  const { wishlist: cartItems } = useAppSelector((state) => state.wishlist);
  const dispatch = useAppDispatch();

  return (
    <div className="layout_container py-5 lg:py-10 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-3 lg:gap-5">
      <div className="md:col-span-2 lg:col-span-3 border">
        <div className="px-3 font-medium py-5 bg-gray-50 flex gap-5 items-center justify-between">
          <div className="w-[121px]">Photo</div>
          <div className="flex-1">Title and Rating</div>
          <div className="w-[70px]">Price</div>
          <div className="w-[70px]">Quantity</div>
          <div className="w-[70px]">Subtotal</div>
          <div className="w-[70px]">Action</div>
        </div>
        {cartItems.length > 0 ? (
          cartItems.map((item, i): any => (
            <div
              key={i}
              className="border-b py-2 px-3 flex items-stretch gap-5 justify-between"
            >
              <div className="border p-5 center rounded-md">
                <Image
                  src="/images/product.jpg"
                  alt="Product Image"
                  height={100}
                  width={80}
                  className=""
                />
              </div>
              <div className="flex-1">
                <p className="font-bold pt-2">{item.name}</p>
                <p>Ratings: {item.rating}</p>
              </div>
              <div className="w-[70px] self-center">${item.price}</div>
              <div className="w-[70px] self-center">
                <input
                  type="number"
                  name="quantity"
                  id="quantity"
                  defaultValue={item.quantity}
                  className="border w-16 p-2"
                  onChange={(e) => {
                    setQantity(e.target.value);
                  }}
                />
              </div>
              <div className="w-[70px] self-center">
                ${item.price * parseInt(quantity || item.quantity)}
              </div>
              <div className="w-[70px] self-center">
                <button
                  onClick={() => dispatch(deleteWishlist({ id: item.id }))}
                >
                  <Trash className="hover:text-green-500" />
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="py-5 text-center">There is no items in cart!</div>
        )}
      </div>
    </div>
  );
};

export default FavoriteView;
