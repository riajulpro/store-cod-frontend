import { getAllProducts } from "@/utils/getData";
import ProductCard from "../Product/ProductCard";
import SectionHeading from "../ui/sectionHeading";
import { IProduct } from "@/types/product";

const PopulerProduct = async () => {
  const { data: products } = await getAllProducts();

  return (
    <section className="w-full mt-[50px]">
      <SectionHeading text="Populer Items" />
      <div className="gridResponsive justify-center gap-[15px]">
        {products.slice(0, 6).map((product: IProduct, i: number) => (
          <ProductCard product={product} key={i + "product"} />
        ))}
      </div>
    </section>
  );
};

export default PopulerProduct;
