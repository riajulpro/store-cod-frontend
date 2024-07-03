import Image from "next/image";
import Link from "next/link";
import SubscribeInput from "../shared/SubscribeInput";

const DeliveryAd = () => {
  return (
    <section className="w-full mt-[50px]">
      <div
        className={`w-full h-[300px] sm:h-[350px] lg:h-[500px]  relative flex flex-col justify-center pr-[30px] pl-[30px] lg:pl-[50px]  duration-[0.3s] rounded-[15px]`}
        style={{
          backgroundImage: `url("/images/banner-10.png")`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          transition: "0.5s",
        }}
      >
        <div className="flex flex-col gap-[25px] relative z-20">
          <h1 className="text-[25px] md:text-[30px] lg:text-[40px] xl:text-[60px] font-[700] xl:leading-[72px] text-primaryTxt">
            Stay home & get your daily <br />
            needs from our shop
          </h1>
          <p className="text-[18px] lg:text-[25px] font-[500]">
            Super fast delivery with{" "}
            <Link className="text-primaryMat hover:underline" href={"/"}>
              Store App
            </Link>
          </p>

          <SubscribeInput />
        </div>
        <Image
          src={"/images/deliveryGuy.png"}
          width={634}
          height={345}
          alt="delivery man"
          className="absolute bottom-0 right-0 hidden md:block md:w-[400px] lg:w-[500px] xl:w-[634px] z-10"
        />
      </div>
    </section>
  );
};

export default DeliveryAd;
