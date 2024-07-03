import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import PopulerProduct from "@/components/home/PopulerProduct";
import Review from "@/components/home/Review";

import ShowCase from "@/components/home/ShowCase";

const HomeView = () => {
  return (
    <>
      <Banner />
      <Categories />
      <ShowCase />
      <PopulerProduct />
      <Review />
    </>
  );
};

export default HomeView;
