import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import DeliveryAd from "@/components/home/DeliveryAd";
import DownloadApp from "@/components/home/DownloadApp";
import PopulerProduct from "@/components/home/PopulerProduct";
import Review from "@/components/home/Review";

import ShowCase from "@/components/home/ShowCase";
import ContactUsView from "./ContactUsView";

const HomeView = () => {
  return (
    <>
      <Banner />
      <Categories />
      <ShowCase />
      <PopulerProduct />
      <DeliveryAd />
      <Review />

      <ContactUsView className="mt-[50px] rounded-[15px]" />
      <DownloadApp />
    </>
  );
};

export default HomeView;
