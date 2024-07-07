"use client";
import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { Loader } from "lucide-react";
import { useGetAllCategoriesQuery } from "@/redux/features/category/category.api";
import { useGetAllBrandsQuery } from "@/redux/features/brand/brand.api";
import { useGetAllTagsQuery } from "@/redux/features/tag.api";
import { useCreateProductMutation } from "@/redux/features/product/product.api";

const ProductForm: React.FC = () => {
  const [createProduct, { isLoading, isSuccess, isError, error }] = useCreateProductMutation(undefined);
  const { data: categories } = useGetAllCategoriesQuery(undefined);
  const { data: brands } = useGetAllBrandsQuery(undefined);
  const { data: tags } = useGetAllTagsQuery(undefined);

  const formik = useFormik({
    initialValues: {
      name: '',
      photo: '',
      category: '',
      description: '',
      stock: 0,
      price: 0,
      discountPrice: 0,
      brand: '',
      service: '',
      tag: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      photo: Yup.string().required('Required'),
      category: Yup.string().required('Required'),
      stock: Yup.number().required('Required').min(1, 'Must be at least 1'),
      price: Yup.number().required('Required').min(0, 'Must be at least 0'),
      discountPrice: Yup.number().required('Required').min(0, 'Must be at least 0'),
      // description: Yup.string().required('Required'),
      brand: Yup.string().required('Required'),
      // tag: Yup.string().required('Required'),
    }),
    onSubmit: async (values) => {
      try {
        console.log("values", values);
        
        await createProduct(values).unwrap();
        formik.resetForm();
      } catch (error) {
        console.error('Failed to create product:', error);
      }
    },
  });

  return (
    <div className="p-5 w-full md:w-[600px] md:ml-[40px] border">
      <h2 className="text-xl font-bold mb-3">Create Product</h2>
      <form onSubmit={formik.handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            type="text"
            name="name"
            value={formik.values.name}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          />
          {formik.touched.name && formik.errors.name ? (
            <div className="text-red-500 text-sm">{formik.errors.name}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium">Photo URL</label>
          <input
            type="text"
            name="photo"
            value={formik.values.photo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          />
          {formik.touched.photo && formik.errors.photo ? (
            <div className="text-red-500 text-sm">{formik.errors.photo}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium">Category</label>
          <select
            name="category"
            value={formik.values.category}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          >
            <option value="" label="Select category" />
            {categories?.data.map((category:any) => (
              <option key={category.value} value={category.value} label={category.label} />
            ))}
          </select>
          {formik.touched.category && formik.errors.category ? (
            <div className="text-red-500 text-sm">{formik.errors.category}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium">Description</label>
          <input
            type="text"
            name="description"
            value={formik.values.description}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          />
          {formik.touched.description && formik.errors.description ? (
            <div className="text-red-500 text-sm">{formik.errors.description}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium">Stock</label>
          <input
            type="number"
            name="stock"
            value={formik.values.stock}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          />
          {formik.touched.stock && formik.errors.stock ? (
            <div className="text-red-500 text-sm">{formik.errors.stock}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium">Price</label>
          <input
            type="number"
            name="price"
            value={formik.values.price}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          />
          {formik.touched.price && formik.errors.price ? (
            <div className="text-red-500 text-sm">{formik.errors.price}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium">Discount Price</label>
          <input
            type="number"
            name="discountPrice"
            value={formik.values.discountPrice}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          />
          {formik.touched.discountPrice && formik.errors.discountPrice ? (
            <div className="text-red-500 text-sm">{formik.errors.discountPrice}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium">Brand</label>
          <select
            name="brand"
            value={formik.values.brand}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          >
            <option value="" label="Select brand" />
            {brands?.data.map((brand:any) => (
              <option key={brand.value} value={brand.value} label={brand.label} />
            ))}
          </select>
          {formik.touched.brand && formik.errors.brand ? (
            <div className="text-red-500 text-sm">{formik.errors.brand}</div>
          ) : null}
        </div>
        <div>
          <label className="block text-sm font-medium">Service</label>
          <input
            type="text"
            name="service"
            value={formik.values.service}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Tag</label>
          <select
            name="tag"
            value={formik.values.tag}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            className="w-full border p-2 rounded"
          >
            <option value="" label="Select tag" />
            {tags?.data?.map((tag:any) => (
              <option key={tag.value} value={tag.value} label={tag.label} />
            ))}
          </select>
        </div>
        <button
          type="submit"
          className="mt-3 px-4 py-2 bg-blue-500 text-white rounded"
        >
          {isLoading ? <Loader /> : "Create Product"}
        </button>
        {isError && <div className="text-red-500 text-sm">{(error as any)?.data?.message}</div>}
        {isSuccess && <div className="text-green-500 text-sm">Product created successfully</div>}
      </form>
    </div>
  );
};

export default ProductForm;