'use client';
import React, { useState } from 'react';
import ProductCard from '@/components/Product/ProductCard';
import { PaginationResult, paginate } from '@/utils/Pagination';
import { products } from '@/mock/Products';
import { IProduct } from '@/types/product';
import { productCategories } from '@/mock/productCategory';
import Image from 'next/image';

const ProductsView: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [sortOption, setSortOption] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [visibleCategories, setVisibleCategories] = useState<number>(5);
  const productsPerPage = 8;

  const handleSortChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setSortOption(e.target.value);
  };

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePrevPage = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 1));
  };

  const handleCategoryChange = (categoryValue: string) => {
    setSelectedCategory(categoryValue);
    setCurrentPage(1);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };


  // Filter products by selected category
  const filteredProducts = selectedCategory
    ? products.filter((product) => product.category.value === selectedCategory)
    : products;

  const paginationResult: PaginationResult<IProduct> = paginate(
    filteredProducts,
    currentPage,
    productsPerPage
  );

  return (
    <div className="flex flex-col md:flex-row p-5">
      <div className="mb-5 md:mb-0 md:mr-5 w-full md:w-1/4">
        <h2 className="text-xl font-bold mb-3">Filter Options</h2>
        <div className="space-y-3">
          <div className="p-3 rounded">
            <h3 className="font-semibold mb-2">Categories</h3>
            <ul>
              {productCategories.slice(0, visibleCategories).map((category) => (
                <li key={category._id}>
                  <button
                    onClick={() => handleCategoryChange(category.value)}
                    className={`w-full text-left p-2 rounded flex items-center hover:shadow-lg ${
                      selectedCategory === category.value
                        ? 'bg-primaryMat text-white'
                        : 'text-black'
                    }`}
                  >
                    <Image
                      src={category.image}
                      height={55}
                      width={55}
                      alt="img"
                      className=""
                    />
                    <div className="flex items-center justify-between w-full ">
                      <p className="font-medium">{category.label}</p>
                      <p className="font-medium bg-primaryMat px-[10px] py-[5px] text-[12px] rounded-2xl text-white">
                        {category.count}
                      </p>
                    </div>
                  </button>
                </li>
              ))}
            </ul>
            {visibleCategories < productCategories.length ? (
              <button
                onClick={() => setVisibleCategories((prevCount) => prevCount + 5)}
                className="w-full text-left p-2 rounded flex items-center justify-center bg-gray-200 text-black mt-3"
              >
                Show More
              </button>
            ) : 
            <button
                onClick={() => setVisibleCategories(5)}
                className="w-full text-left p-2 rounded flex items-center justify-center bg-gray-200 text-black mt-3"
              >
                Show Less
              </button>
            }
          </div>
          <div className="bg-gray-100 p-3 rounded">Filter 2</div>
          <div className="bg-gray-100 p-3 rounded">Filter 3</div>
        </div>
      </div>
      <div className="w-full md:w-3/4">
        <h2 className="text-xl font-bold mb-3">Products</h2>
        <div className="flex justify-between items-center mb-5">
          <div>
            <span className="text-gray-600">
              {paginationResult.totalItems} products found
            </span>
          </div>
          <div>
            <label htmlFor="sort" className="mr-2">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOption}
              onChange={handleSortChange}
              className="border p-2 rounded"
            >
              <option value="">Select</option>
              <option value="price-asc">Price: Low to High</option>
              <option value="price-desc">Price: High to Low</option>
              <option value="rating">Rating</option>
            </select>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {paginationResult.paginatedItems.map((product, i) => (
            <ProductCard product={product} key={i + 'product'} />
          ))}
        </div>
        <div className="flex justify-start gap-[20px] mt-20 mb-10">
          <button
            onClick={handlePrevPage}
            className="px-4 py-2 bg-primaryMat text-white rounded disabled:opacity-50"
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <div className="flex space-x-2">
            {Array.from({ length: paginationResult.totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => handlePageChange(i + 1)}
                className={`px-4 py-2 rounded ${
                  currentPage === i + 1
                    ? 'bg-primaryMat text-white'
                    : 'bg-borderColor text-black'
                }`}
              >
                {i + 1}
              </button>
            ))}
          </div>
          <button
            onClick={handleNextPage}
            className="px-4 py-2 bg-primaryMat text-white rounded disabled:opacity-50"
            disabled={currentPage === paginationResult.totalPages}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductsView;
