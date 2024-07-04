import { IProductCategory } from "@/types/product";

export const productCategories: IProductCategory[] = [
  {
    _id: "1",
    label: "Fruits & Vegetables",
    value: "fresh-produce",
    image: "/images/category1.png",
    count: 150,
  },
  {
    _id: "2",
    label: "Dairy & Eggs",
    value: "dairy-eggs",
    image: "/images/category2.png",

    count: 85,
  },
  {
    _id: "3",
    label: "Bakery & Snacks",
    value: "bakery-snacks",
    image: "/images/category1.png",

    count: 120,
  },
  {
    _id: "4",
    label: "Beverages",
    value: "beverages",
    image: "/images/category2.png",

    count: 200,
  },
  {
    _id: "5",
    label: "Meat & Seafood",
    value: "meat-seafood",
    image: "/images/category1.png",

    count: 60,
  },
  {
    _id: "6",
    label: "Pantry Staples",
    value: "pantry-staples",
    image: "/images/category2.png",

    count: 180,
  },
  {
    _id: "7",
    label: "Frozen Foods",
    value: "frozen-foods",
    image: "/images/category1.png",

    count: 90,
  },
];
