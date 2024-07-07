"use client";
import React, { useState } from "react";
import {
  useGetAllCategoriesQuery,
  useDeleteCategoryMutation,
  useUpdateCategoryMutation,
} from "@/redux/features/category/category.api";
import CategoryForm from "./CategoryForm";
import Modal from "../shared/ModalCompo";
import Image from "next/image";

type ICategory = { _id: string; label: string; value: string };

const CategoryList: React.FC = () => {
  const {
    data: categories,
    isLoading,
    isError,
  } = useGetAllCategoriesQuery(undefined);
  const [deleteCategory] = useDeleteCategoryMutation();
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalType, setModalType] = useState("create");

  const handleEdit = (category: any) => {
    setSelectedCategory(category);
    setModalType("edit");
    setIsModalOpen(true);
  };

  const handleDelete = async (id:string) => {
    try {
      await deleteCategory(id);
    } catch (error) {
      console.error("Failed to delete category:", error);
    }
  };

  const handleCreate = () => {
    setSelectedCategory(null);
    setModalType("create");
    setIsModalOpen(true);
  };

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error loading categories.</p>;

  return (
    <div>
      <button
        onClick={handleCreate}
        className="mb-4 bg-blue-500 text-white px-4 py-2 rounded"
      >
        Add Category
      </button>

      <ul>
        {categories?.data.map((category: ICategory) => (
          <li
            key={category._id}
            className="mb-2 p-2 border rounded flex justify-between items-center"
          >
            <div>
              <p>
                <strong>Label:</strong> {category.label}
              </p>
              <p>
                <strong>Value:</strong> {category.value}
              </p>
              <p>
                <strong>Image:</strong>{" "}
                {/* <Image src={category.image} alt={category.label} width={50} height={50} /> */}
              </p>
            </div>
            <div>
              <button
                onClick={() => handleEdit(category)}
                className="bg-yellow-500 text-white px-4 py-2 rounded mr-2"
              >
                Edit
              </button>
              <button
                onClick={() => handleDelete(category._id)}
                className="bg-red-500 text-white px-4 py-2 rounded"
              >
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>

      {isModalOpen && (
        <Modal onClose={() => setIsModalOpen(false)}>
          <CategoryForm
            initialValues={
              selectedCategory || { label: "", value: "", image: "" }
            }
            modalType={modalType}
            onClose={() => setIsModalOpen(false)}
          />
        </Modal>
      )}
    </div>
  );
};

export default CategoryList;
