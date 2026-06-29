//src/components/admin/ProductTable.tsx

"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

export default function ProductTable() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const res = await fetch("/api/products");
    const data = await res.json();

    setProducts(data);
  };

  const handleDelete = async (
  id: string
) => {
  const confirmDelete =
    window.confirm(
      "Delete this product?"
    );

  if (!confirmDelete) return;

  await fetch(
    `/api/products/${id}`,
    {
      method: "DELETE",
    }
  );

  fetchProducts();
};

  return (
    <div className="bg-white rounded-2xl shadow overflow-hidden">
      <table className="w-full">
        <thead className="bg-[#7A1C1C] text-white">
          <tr>
            <th className="p-4 text-left">Image</th>
            <th className="p-4 text-left">Name</th>
            <th className="p-4 text-left">Category</th>
            <th className="p-4 text-left">Type</th>
            <th className="p-4 text-left">Size</th>
            <th className="p-4 text-left">Actions</th>
          </tr>
        </thead>

        <tbody>
          {products.map((product) => (
            <tr
              key={product.id}
              className="border-b"
            >
              <td className="p-4">
                {product.images?.[0] && (
                  <Image
                    src={product.images[0]}
                    alt=""
                    width={60}
                    height={60}
                    className="rounded-lg object-cover"
                  />
                )}
              </td>

              <td className="p-4">
                {product.productName}
              </td>

              <td className="p-4">
                {product.category}
              </td>

              <td className="p-4">
                {product.type}
              </td>

              <td className="p-4">
                {product.size}
              </td>
              <td className="p-4">
  <div className="flex gap-2">
    <button
      onClick={() =>
        window.location.href =
          `/admin/products/edit/${product.id}`
      }
      className="
        bg-blue-600
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      Edit
    </button>

    <button
      onClick={() =>
        handleDelete(product.id)
      }
      className="
        bg-red-600
        text-white
        px-4
        py-2
        rounded-lg
      "
    >
      Delete
    </button>
  </div>
</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}