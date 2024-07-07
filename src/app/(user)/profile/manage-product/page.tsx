"use client";
import {
  useCreateProductMutation,
  useDeleteProductMutation,
  useGetAllProductsQuery,
  useUpdateProductMutation,
} from "@/redux/features/product/product.api";
import { Loader } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

const ManageProducts = () => {
  const { data: products, error, isLoading } = useGetAllProductsQuery({});
  const [createProduct] = useCreateProductMutation();
  const [updateProduct] = useUpdateProductMutation();
  const [deleteProduct, { isSuccess: isSuccessDel, isLoading: isLoadingDel }] =
    useDeleteProductMutation();

  const [form, setForm] = useState({
    name: "",
    photo: "",
    category: "",
    description: "",
    stock: 0,
    price: 0,
    discountPrice: 0,
    brand: "",
  });
  const [isEditing, setIsEditing] = useState(false);
  const [editId, setEditId] = useState(null);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const handleInputChange = (e: { target: { name: any; value: any } }) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    try {
      if (isEditing) {
        await updateProduct({ id: editId, ...form });
        setIsEditing(false);
        setEditId(null);
      } else {
        await createProduct(form);
      }
      setForm({
        name: "",
        photo: "",
        category: "",
        description: "",
        stock: 0,
        price: 0,
        discountPrice: 0,
        brand: "",
      });
      setModalIsOpen(false);
    } catch (error) {
      console.error(error);
    }
  };

  const handleEdit = (product: any) => {
    setForm(product);
    setIsEditing(true);
    setEditId(product._id);
    setModalIsOpen(true);
  };

  const handleDelete = async (id: string) => {
    try {
      await deleteProduct(id);
    } catch (error) {
      console.error(error);
    }
  };

  if (isLoading) return <div className="center w-full h-[200px]">
    <Loader />
  </div>;
  if (isSuccessDel) {
    toast.success("Deleted Successfully", {id: "del-product"});
  }
  if (isLoadingDel) {
      toast.error("Deletetion failed", {id: "del-product-error"});
  }
  if (error) return <p>Error: {(error as { message: string }).message}</p>;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Manage Products</h1>
      <table className="min-w-full bg-white border">
        <thead>
          <tr>
            <th className="py-2 px-4 border-b">Name</th>
            <th className="py-2 px-4 border-b">Description</th>
            <th className="py-2 px-4 border-b">Stock</th>
            <th className="py-2 px-4 border-b">Price</th>
            <th className="py-2 px-4 border-b">Actions</th>
          </tr>
        </thead>
        <tbody>
          {products?.data?.map((product: any) => (
            <tr key={product._id}>
              <td className="py-2 px-4 border-b">{product.name}</td>
              <td className="py-2 px-4 border-b">{product.description}</td>
              <td className="py-2 px-4 border-b">{product.stock}</td>
              <td className="py-2 px-4 border-b">{product.price}</td>
              <td className="py-2 px-4 border-b">
                <button
                  className="bg-blue-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => handleEdit(product)}
                >
                  Edit
                </button>
                <button
                  className="bg-red-500 text-white px-4 py-2 rounded"
                  onClick={() => handleDelete(product._id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {modalIsOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
            <h2 className="text-xl font-bold mb-4">
              {isEditing ? "Edit Product" : "Add Product"}
            </h2>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleInputChange}
                placeholder="Name"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                name="photo"
                value={form.photo}
                onChange={handleInputChange}
                placeholder="Photo URL"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                name="category"
                value={form.category}
                onChange={handleInputChange}
                placeholder="Category ID"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <textarea
                name="description"
                value={form.description}
                onChange={handleInputChange}
                placeholder="Description"
                className="w-full p-2 mb-4 border rounded"
                required
              ></textarea>
              <input
                type="number"
                name="stock"
                value={form.stock}
                onChange={handleInputChange}
                placeholder="Stock"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="number"
                name="price"
                value={form.price}
                onChange={handleInputChange}
                placeholder="Price"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="number"
                name="discountPrice"
                value={form.discountPrice}
                onChange={handleInputChange}
                placeholder="Discount Price"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <input
                type="text"
                name="brand"
                value={form.brand}
                onChange={handleInputChange}
                placeholder="Brand"
                className="w-full p-2 mb-4 border rounded"
                required
              />
              <div className="flex justify-end">
                <button
                  type="button"
                  className="bg-gray-500 text-white px-4 py-2 rounded mr-2"
                  onClick={() => setModalIsOpen(false)}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500 text-white px-4 py-2 rounded"
                >
                  {isEditing ? "Update" : "Add"} Product
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default ManageProducts;
