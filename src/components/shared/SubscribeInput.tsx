import { Crown, Send } from "lucide-react";
import Link from "next/link";

const SubscribeInput = () => {
  return (
    <>
      <div className="hidden sm:flex items-center max-w-[460px] h-[56px]  bg-white rounded-full shadow-md overflow-hidden">
        <div className="flex items-center px-4">
          <Send className="w-5 h-5 text-gray-400" />
        </div>
        <input
          type="email"
          placeholder="Your email address"
          className="flex-1 h-full py-2 text-gray-700 bg-transparent border-none rounded-l-full focus:outline-none"
        />
        <button className="px-9 py-2 text-white bg-primaryMat rounded-full hover:bg-green-500 h-full">
          Subscribe
        </button>
      </div>
      <Link
        href={"/subscribe"}
        className="px-6 py-2 text-white bg-primaryMat rounded-full hover:bg-green-500 h-full flex justify-center items-center gap-[5px] sm:hidden w-fit"
      >
        Subscribe <Crown />
      </Link>
    </>
  );
};

export default SubscribeInput;
