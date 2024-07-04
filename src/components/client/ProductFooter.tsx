"use client";

import { IReviews } from "@/types/product";
import { useState } from "react";

interface PropsType {
  description?: string;
  reviews?: IReviews[];
}

const ProductFooter = ({ description, reviews }: PropsType) => {
  const [current, setCurrent] = useState<string>("Description");
  const tabs = ["Description", "Reviews"];
  const contents = ["Description", "Reviews"];

  const reviewsView = (
    <div>
      {reviews?.map((review) => (
        <div key={review._id} className="max-w-lg">
          <p>{review.text}</p>
          <p className="text-right">By author</p>
        </div>
      ))}
    </div>
  );

  const descriptionPanel = <div>{description}</div>;
  const reviewsPanel = (
    <div>
      {reviews ? reviews.length > 0 && reviewsView : "No reviews found!"}
    </div>
  );

  return (
    <div className="my-5 lg:my-7 rounded-md border p-5">
      <div className="flex gap-3">
        {tabs.map((tab, i) => (
          <button
            key={i}
            className={`bg-white rounded-full px-4 py-2 border hover:shadow-md duration-150 ${
              current === tab ? "font-bold shadow-md" : "font-medium"
            }`}
            onClick={() => setCurrent(tab)}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="py-5">
        {contents.map((content, i) => (
          <div
            key={i}
            className={`${current === content ? "block" : "hidden"}`}
          >
            {content === "Description" ? descriptionPanel : reviewsPanel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductFooter;
