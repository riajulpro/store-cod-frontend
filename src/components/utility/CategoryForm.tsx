"use client";
import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  useCreateCategoryMutation,
  useUpdateCategoryMutation,
} from "@/redux/features/category/category.api";
import Image from "next/image";
import { LuUploadCloud } from "react-icons/lu";
import uploadImage from "@/utils/imageUploadByFetch";
import { toast } from "sonner";
import { MdClose } from "react-icons/md";

const CategoryForm: React.FC<{
  initialValues: any;
  modalType: string;
  onClose: () => void;
}> = ({ initialValues, modalType, onClose }) => {
  const validationSchema = Yup.object({
    label: Yup.string().required("Label is required"),
    value: Yup.string().required("Value is required"),
  });

  const [createCategory, { isLoading: isCreating }] =
    useCreateCategoryMutation();
  const [updateCategory, { isLoading: isUpdating }] =
    useUpdateCategoryMutation();

  const [userPic, setUserPic] = useState<string | undefined>();

  const handleSubmit = async (
    values: any,
    { resetForm }: { resetForm: () => void }
  ) => {
    try {
      if (modalType === "create") {
        await createCategory({ ...values, image: userPic });
      } else {
        console.log("update val", values);
        await updateCategory(values);
      }
      resetForm();
      onClose();
    } catch (error) {
      console.error("Failed to submit category:", error);
    }
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    const toastid = toast.loading("Please wait updating your image...");

    try {
      if (file) {
        const imageUrl = await uploadImage(file, userPic || "");
        setUserPic(imageUrl?.url as string);
      }
    } catch (error) {
      toast.error("Something went wrong");
    } finally {
      toast.dismiss(toastid);
    }
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      <Form>
        <div className="mb-3 w-full md:w-[600px]">
          <div className="flex w-full justify-end">
            <button onClick={() => onClose()} className="">
              <MdClose size={24} />
            </button>
          </div>
          <label htmlFor="label" className="block font-medium">
            Label
          </label>
          <Field
            type="text"
            id="label"
            name="label"
            placeholder="Label"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage name="label" component="p" className="text-red-500" />
        </div>

        <div className="mb-3">
          <label htmlFor="value" className="block font-medium">
            Value
          </label>
          <Field
            type="text"
            id="value"
            name="value"
            placeholder="Value"
            className="w-full p-2 border rounded"
          />
          <ErrorMessage name="value" component="p" className="text-red-500" />
        </div>

        <div>
          <label htmlFor="profile">
            <input
              id="profile"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />
            <div className="relative group overflow-hidden rounded-md">
              {userPic ? (
                <Image
                  src={
                    userPic || initialValues.image || "/images/profileicon.png"
                  }
                  alt="profile pic"
                  height={400}
                  width={400}
                  className="w-full h-[250px] rounded-md object-cover border border-primary inline-block"
                />
              ) : (
                <div className="w-full h-[250px] rounded-md border border-primary center bg-gray-300 font-bold">
                  Upload image
                </div>
              )}

              <div className="bg-black/25 absolute inset-0 z-10 scale-150 group-hover:scale-100 opacity-0 group-hover:opacity-100 duration-150 flex items-center justify-center cursor-pointer">
                <LuUploadCloud className="text-white text-2xl" />
              </div>
            </div>
          </label>
        </div>

        <button
          type="submit"
          className={`bg-primaryMat mt-[20px] text-white px-4 py-2 rounded ${
            isCreating || isUpdating ? "opacity-50 cursor-not-allowed" : ""
          }`}
          disabled={isCreating || isUpdating}
        >
          {isCreating || isUpdating
            ? "Saving..."
            : modalType === "create"
            ? "Create Category"
            : "Update Category"}
        </button>
      </Form>
    </Formik>
  );
};

export default CategoryForm;
