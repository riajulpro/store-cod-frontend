"use client";
import Loading from "@/app/loading";
import { useGetUserOrderHistroyQuery } from "@/redux/features/sell/sell.api";
import { ISell } from "@/types/sell";
import { format } from "date-fns";
import { useState } from "react";

const OrderHistory: React.FC = () => {
  const [page, setPage] = useState(1);
  const { data, isLoading } = useGetUserOrderHistroyQuery({ page });

  if (isLoading) {
    return (
      <div className="w-full h-full center">
        <Loading />
      </div>
    );
  }

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
          {data.data.map((order: ISell) => {
            const orderDate = new Date(order.date);
            const dateStr = format(orderDate, "MMM, dd");
            return (
              <tr key={order._id}>
                <td className="py-2 px-4 border-b text-start">#{order._id}</td>
                <td className="py-2 px-4 border-b text-start">{dateStr}</td>
                <td className="py-2 px-4 border-b text-start">
                  Completed
                </td>{" "}
                {/* Hardcoded for simplicity */}
                <td className="py-2 px-4 border-b text-start">
                  ${(order.quantity * 100).toFixed(2)} for {order.quantity} item
                  {order.quantity > 1 ? "s" : ""}
                </td>
                <td className="py-2 px-4 border-b text-blue-500 cursor-pointer">
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
    </div>
  );
};

export default OrderHistory;
