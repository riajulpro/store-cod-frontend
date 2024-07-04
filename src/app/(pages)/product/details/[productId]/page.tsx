import ProductAddToCart from "@/components/client/ProductAddToCart";
import ProductFooter from "@/components/client/ProductFooter";
import { IProduct } from "@/types/product";
import { getSingleProduct } from "@/utils/getData";
import Image from "next/image";

interface ParamsType {
  params: {
    productId: string;
  };
}

interface DataType {
  success: boolean;
  message: string;
  data: IProduct;
}

const ProductDetailsPage = async ({ params: { productId } }: ParamsType) => {
  const data: DataType = await getSingleProduct(productId);

  if (!data) {
    return (
      <div className="text-center py-10 text-xl font-bold">
        Something went wrong!
      </div>
    );
  }

  if (!data.success) {
    return (
      <div className="text-center py-10 text-xl font-bold">
        {"Product not found"}
      </div>
    );
  }

  const {
    _id,
    name,
    photo,
    category,
    stock,
    price,
    discountPrice,
    brand,
    reviews,
    description,
    averageRating,
    service,
  } = data.data;

  return (
    <section className="layout_container py-5 lg:py-10">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3">
        <div className="lg:col-span-2">
          <div className="border rounded-lg center p-5 overflow-hidden">
            <Image
              src={"/images/product.jpg"}
              alt="Product photo"
              height={500}
              width={300}
              className="w-full h-full"
            />
          </div>
        </div>
        <div className="lg:col-span-2">
          <div className="flex flex-col gap-5 md:p-5">
            <h4
              className="w-fit px-3 py-1 text-sm bg-green-500
             rounded-lg text-white font-medium"
            >
              {brand}
            </h4>
            <h1 className="text-2xl lg:text-4xl font-bold">{name}</h1>
            <p className="text-sm">
              Ratings: <span className="font-sembold">{averageRating}</span> out
              of 5
            </p>
            <div className="flex gap-2 items-center">
              <span className="text-4xl md:text-6xl font-extrabold text-green-500">
                ${discountPrice}
              </span>
              <span className="flex flex-col gap-[0.5]">
                <span className="text-xs">
                  {(((price - discountPrice) / price) * 100).toFixed(0)}% OFF
                </span>
                <s className="text-2xl md:text-3xl font-semibold">${price}</s>
              </span>
            </div>
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Similique, sit. Magni, beatae sint. Ipsum quam omnis nesciunt
              ullam? Minima, voluptatibus?
            </p>
            <p className="text-lg font-medium">
              <span className="text-green-500 font-bold">{stock}</span> items
              In-Stock
            </p>
            <ProductAddToCart data={data.data} />
          </div>
        </div>
        <div className="row-start-3 lg:row-start-auto">
          {/* <div className="border bg-white rounded-md p-5 shadow h-fit">
            right section
          </div> */}
        </div>
        <div className="md:col-span-2 lg:col-span-4">
          <ProductFooter description={description} reviews={reviews} />
        </div>
      </div>
    </section>
  );
};

export default ProductDetailsPage;
