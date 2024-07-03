import UserIcon from "@/icons/userIcon";
import { StarIcon } from "lucide-react";

const ReviewCard = () => {
  const fillStar = <StarIcon className="h-6 w-6 fill-[#f8d228]" />;
  const strokeStar = <StarIcon className="h-6 w-6  stroke-muted-[#f8d228]" />;
  return (
    <div className=" bg-card p-6 border-[1px] border-borderColor rounded-[8px] transition-transform duration-300 ease-in-out hover:-translate-y-2 hover:shadow-lg w-full md:w-[300px]">
      <div className="mb-4 flex items-center">
        <div className="mr-4 h-10 w-10 rounded-full bg-muted p-2">
          <UserIcon className="h-full w-full fill-card-foreground" />
        </div>
        <div>
          <h3 className="text-lg font-medium">Sarah Johnson</h3>
          <div className="flex items-center text-[#f8d228]">
            {fillStar}
            {fillStar}
            {fillStar}
            {fillStar}
            {strokeStar}
          </div>
        </div>
      </div>
      <p className="text-muted-foreground">
        I&apos;ve been using this product for a few weeks now and I&apos;m
        really impressed. It&apos;s well-made, easy to use, and has exceeded my
        expectations.
      </p>
    </div>
  );
};

export default ReviewCard;
