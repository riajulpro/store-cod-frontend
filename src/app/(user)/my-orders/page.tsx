"use client";
import Loading from "@/app/loading";
import PopUpModal from "@/components/ui/PopUpModal";
import { useGetUserOrderHistroyQuery } from "@/redux/features/sell/sell.api";
import { IProduct } from "@/types/product";
import { ISell } from "@/types/sell";
import { format } from "date-fns";
import { SetStateAction, useState } from "react";
import { toast } from "sonner";
import { useCopyToClipboard } from "usehooks-ts";

const OrderHistory: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetUserOrderHistroyQuery({ page });
  const [showModal, setShowModal] = useState<boolean | string>(false);
  const [selectedProduct, setSelectedProduct] = useState<IProduct | null>();
  const [, copy] = useCopyToClipboard();
  if (isLoading) {
    return (
      <div className="w-full h-full center">
        <Loading />
      </div>
    );
  }
  const handleCopyText = async (text: string) => {
    await copy(text);
    toast.success(`${text} Copied to the clipboard`);
  };
  return (
    <div className="container mx-auto my-8">
      <h2 className="text-2xl font-semibold mb-4">Your Orders</h2>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b text-start">Order</th>
            <th className="py-2 px-4 border-b text-start">Date</th>
            <th className="py-2 px-4 border-b text-start">Status</th>
            <th className="py-2 px-4 border-b text-start">Total</th>
            <th className="py-2 px-4 border-b text-start">Actions</th>
          </tr>
        </thead>
        <tbody>
          {data?.data?.map((order: ISell) => {
            const orderDate = new Date(order.date);
            const dateStr = format(orderDate, "MMM, dd");
            return (
              <tr key={order._id}>
                <td
                  className="py-2 px-4 border-b text-start cursor-pointer hover:underline"
                  onClick={() => handleCopyText(order._id)}
                >
                  #{order._id}
                </td>
                <td className="py-2 px-4 border-b text-start">{dateStr}</td>
                <td className="py-2 px-4 border-b text-start">
                  Completed
                </td>{" "}
                {/* Hardcoded for simplicity */}
                <td className="py-2 px-4 border-b text-start">
                  ${(order.quantity * 100).toFixed(2)} for {order.quantity} item
                  {order.quantity > 1 ? "s" : ""}
                </td>
                <td
                  onClick={() => {
                    setShowModal(true);
                    setSelectedProduct(order.productId as IProduct);
                  }}
                  className="py-2 px-4 border-b text-blue-500 cursor-pointer"
                >
                  View
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <div className="flex items-center justify-start gap-[5px] mt-[10px]">
        <p className="text-[18px] font-[500] text-primaryTxt">page:</p>
        {Array.from({ length: Math.ceil(data?.totalDoc / 10 || 1) }).map(
          (_, i) => (
            <button
              onClick={() => setPage(i + 1)}
              key={i + "order page"}
              className={`p-[8px] w-[30px] h-[30px] center rounded-[8px] ${
                page === i + 1
                  ? "bg-primaryMat text-white"
                  : "bg-slate-300 text-primaryTxt"
              }`}
            >
              {i + 1}
            </button>
          )
        )}
      </div>

      <PopUpModal
        state={!!showModal}
        setState={setShowModal as React.Dispatch<SetStateAction<boolean>>}
      >
        <div className="relative top-20 mx-auto p-5 border w-96 shadow-lg rounded-md bg-white">
          <div className="mt-3 text-center">
            <h3 className="text-lg leading-6  text-primaryTxt font-[600]">
              Order Details
            </h3>
            <div className="mt-2 px-7 py-3">
              <p className="text-sm text-primaryTxt">
                <span className="font-[600]">Order ID:</span>{" "}
                {selectedProduct?._id}
              </p>
              <p className="text-sm text-primaryTxt">
                <span className="font-[600]">Product Name:</span>
                {selectedProduct?.name}
              </p>
            </div>
            <div className="items-center px-4 py-3">
              <button
                className="px-4 py-2 bg-blue-500 text-white text-base font-medium rounded-md w-full shadow-sm hover:bg-blue-600"
                onClick={() => {
                  setSelectedProduct(null);
                  setShowModal(false);
                }}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </PopUpModal>
    </div>
  );
};

export default OrderHistory;
