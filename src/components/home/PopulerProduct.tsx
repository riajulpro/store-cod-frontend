import { products } from "@/mock/Products";
import ProductCard from "../Product/ProductCard";
import SectionHeading from "../ui/sectionHeading";

const PopulerProduct = () => {
  return (
    <section className="w-full mt-[50px]">
      <SectionHeading text="Populer Items" />
      <div className="gridResponsive justify-center gap-[15px]">
        {products.map((product, i) => (
          <ProductCard product={product} key={i + "product"} />
        ))}
      </div>
    </section>
  );
};

export default PopulerProduct;
