import Banner from "@/components/home/Banner";
import Categories from "@/components/home/Categories";
import PopulerProduct from "@/components/home/PopulerProduct";
import ShowCase from "@/components/home/ShowCase";

const HomeView = () => {
  return (
    <>
      <Banner />
      <Categories />
      <ShowCase />
      <PopulerProduct />
    </>
  );
};

export default HomeView;
