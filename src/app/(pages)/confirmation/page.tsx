import Link from "next/link";
import React from "react";

const page = () => {
  return (
    <div className="my-5 max-w-lg mx-auto p-5 rounded border shadow-sm">
      <h1 className="text-3xl font-bold text-center">
        Your order is successfullly confirmed!
      </h1>
      <Link href="/dashboard">
        <button className="bg-green-500 text-white py-3 px-5 rounded-md">
          Go to Dashboard
        </button>
      </Link>
    </div>
  );
};

export default page;
