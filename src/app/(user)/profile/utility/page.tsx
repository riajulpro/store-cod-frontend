"use client";
import CategoryList from "@/components/utility/CategoryUtility";
import React, { useState } from "react";

const UtilityPage = () => {
  const [active, setActive] = useState(1);

  return (
    <div>
      <div className="flex flex-wrap gap-[20px] mb-[40px]">
        <button
          onClick={() => setActive(1)}
          className={`px-[20px] py-[8px] text-center w-[160px] ${active === 1 ? "bg-primaryMat hover:bg-primaryMat" : "bg-primaryMat/80 hover:bg-primaryMat"} text-white font-semibold`}
          style={{ borderRadius: 10 }}
        >
          Category
        </button>
        <button
          onClick={() => setActive(2)}
          className={`px-[20px] py-[8px] text-center w-[160px] ${active === 2 ? "bg-primaryMat hover:bg-primaryMat" : "bg-primaryMat/80 hover:bg-primaryMat"} text-white font-semibold`}
          style={{ borderRadius: 10 }}
        >
          Brand
        </button>
        <button
          onClick={() => setActive(3)}
          className={`px-[20px] py-[8px] text-center w-[160px] ${active === 3 ? "bg-primaryMat hover:bg-primaryMat" : "bg-primaryMat/80 hover:bg-primaryMat"} text-white font-semibold`}
          style={{ borderRadius: 10 }}
        >
          Tag
        </button>
      </div>

      {active === 1 && <CategoryList />}
      {/* {active === 2 && <BrandForm />}  */}
      {/* {active === 3 && <TagForm />}  */}
    </div>
  );
};

export default UtilityPage;
