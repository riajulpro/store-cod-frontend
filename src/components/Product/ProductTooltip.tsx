import { IProduct } from "@/types/product";
import { Eye, ReceiptText, ShoppingCart } from "lucide-react";

const ProductTooltip = ({ product }: { product: IProduct }) => {
  return (
    <div
      className="absolute top-[-100%] left-0 backdrop-blur-sm w-full h-full center  group-hover/image:top-0 overflow-hidden"
      style={{ transition: "0.3s" }}
    >
      <div className="flex items-center justify-center border-[1px] border-primaryMat bg-white rounded-[3px] overflow-hidden p-[5px]">
        <button className="p-[5px] border-x-[1px] border-borderColor hover:bg-[#f0f0f0]">
          <ShoppingCart />
        </button>
        <button className="p-[5px] border-r-[1px] border-borderColor hover:bg-[#f0f0f0]">
          <ReceiptText />
        </button>
        <button className="p-[5px] border-r-[1px] border-borderColor hover:bg-[#f0f0f0]">
          <Eye />
        </button>
      </div>
    </div>
  );
};

export default ProductTooltip;
