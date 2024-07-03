import { MoveRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const ShowCase = () => {
  return (
    <section className="w-full h-[300px] bg-[#f0e8d5] rounded-[15px] relative flex  flex-col justify-center mt-[50px]">
      <Image
        src={"/images/show-case.png"}
        alt="show case image"
        width={260}
        height={190}
        className="absolute bottom-[20px] right-[20px]"
      />
      <div className="pl-[50px] flex flex-col gap-[15px]">
        <h1 className="text-primaryTxt text-[25px] font-[600]">
          Everyday Fresh & Clean <br />
          with Our Products
        </h1>
        <Link
          href={"/"}
          className="text-white px-[15px] py-[6px] bg-primaryMat center gap-[5px] w-fit group/link hover:rounded-[5px] 
          duration-75"
        >
          Shop
          <MoveRight
            className="relative left-0 group-hover/link:left-[7px]"
            style={{ transition: "0.3s" }}
          />
        </Link>
      </div>
    </section>
  );
};

export default ShowCase;
