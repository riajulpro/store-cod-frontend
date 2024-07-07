"use client";
import React, { useState } from "react";
import { useGetAllSellsQuery } from "@/redux/features/sell/sell.api";
import { Loader } from "lucide-react";

const Sell: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const salesPerPage = 5;

  const { data, isSuccess, isLoading, error } = useGetAllSellsQuery({
    page: currentPage,
    limit: salesPerPage,
  });

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center min-h-screen w-full">
        <Loader />
      </div>
    );
  }

  if (error) {
    return <h1>An error occurred</h1>;
  }

  // const sales = isSuccess && data?.data;
  const totalPages = data ? Math.ceil(data.total / salesPerPage) : 0;
  if (isSuccess) {
    return (
      <div className="p-5">
        <h2 className="text-xl font-bold mb-3">Sales</h2>
        <div className="min-h-[300px]">
          <table className="min-w-full bg-white">
            <thead>
              <tr>
                <th className="py-2 px-4 border-b">ID</th>
                <th className="py-2 px-4 border-b">Date</th>
                <th className="py-2 px-4 border-b">Quantity</th>
                <th className="py-2 px-4 border-b">Cost</th>
                <th className="py-2 px-4 border-b">Customer Name</th>
                <th className="py-2 px-4 border-b">Product Name</th>
              </tr>
            </thead>
            <tbody>
              { data?.data.length > 0 ? data?.data.map((sell: any) => (
                <tr key={sell._id}>
                  <td className="py-2 px-4 border-b">{sell._id}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(sell.date).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">{sell.quantity}</td>
                  <td className="py-2 px-4 border-b">
                    {sell.quantity * sell.productId.discountPrice}$
                  </td>
                  <td className="py-2 px-4 border-b">
                    {sell.customer?.firstName}
                  </td>
                  <td className="py-2 px-4 border-b">{sell.productId?.name}</td>
                </tr>
              ))
            :
            <div className="text-center w-full text-borderDark text-xl pt-[40px]">
              No Data Found
            </div>
            }
            </tbody>
          </table>
        </div>
        <div className="mt-4 flex justify-between items-center">
          <div className="text-sm text-gray-500">
            Showing {data?.data.length} of {data?.total || 0} sales
          </div>
          <div className="flex gap-2">
            <button
              onClick={() => handlePageChange(currentPage - 1)}
              className={`px-4 py-2 text-white rounded ${
                currentPage > 1
                  ? "bg-primaryMat"
                  : "cursor-not-allowed bg-gray-200"
              }`}
              disabled={currentPage === 1}
            >
              Previous
            </button>
            <button
              onClick={() => handlePageChange(currentPage + 1)}
              className={`px-4 py-2 text-white rounded ${
                currentPage < totalPages
                  ? "bg-primaryMat"
                  : "cursor-not-allowed bg-gray-200"
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </div>
        </div>
        {/* <div className="flex justify-between mt-5">
        <button
          onClick={handlePrevPage}
          className="px-4 py-2 bg-primaryMat text-white rounded disabled:opacity-50"
          disabled={currentPage === 1}
        >
          Prev
        </button>
        <div className="flex space-x-2">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              onClick={() => handlePageChange(i + 1)}
              className={`px-4 py-2 rounded ${
                currentPage === i + 1 ? "bg-primaryMat text-white" : "bg-gray-200 text-black"
              }`}
            >
              {i + 1}
            </button>
          ))}
        </div>
        <button
          onClick={handleNextPage}
          className="px-4 py-2 bg-primaryMat text-white rounded disabled:opacity-50"
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div> */}
      </div>
    );
  }

  return null;
};

export default Sell;
