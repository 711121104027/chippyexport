"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { parseProductColors } from "@/types/product";

export default function ProductTable() {
  const [products, setProducts] = useState<any[]>([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const res = await fetch("/api/products");
      const data = await res.json();

      if (Array.isArray(data)) {
        setProducts(data);
      } else {
        setProducts([]);
      }
    } catch (error) {
      console.error("Failed to fetch products:", error);
      setProducts([]);
    }
  };

  const handleDelete = async (id: string) => {
    const confirmDelete = window.confirm("Delete this product?");
    if (!confirmDelete) return;

    await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    fetchProducts();
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-neutral-200/80 overflow-hidden">
      <div className="p-4 sm:p-6 border-b border-neutral-200 flex items-center justify-between">
        <div>
          <h2 className="text-xl font-bold text-neutral-900">All Products</h2>
          <p className="text-xs text-neutral-500 mt-0.5">
            Manage your catalog, color variants, and images.
          </p>
        </div>

        <Link
          href="/admin/products/add"
          className="bg-[#7A1C1C] hover:bg-[#611515] text-white text-sm font-medium px-4 py-2.5 rounded-xl transition shadow-sm"
        >
          + Add Product
        </Link>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-[#FAF7F2] border-b border-neutral-200 text-neutral-700 text-xs uppercase tracking-wider font-semibold">
            <tr>
              <th className="p-4 text-left">Image</th>
              <th className="p-4 text-left">Name</th>
              <th className="p-4 text-left">Category</th>
              <th className="p-4 text-left">Colors</th>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Size</th>
              <th className="p-4 text-right">Actions</th>
            </tr>
          </thead>

          <tbody className="divide-y divide-neutral-100 text-sm">
            {products.map((product) => {
              const colorList = parseProductColors(product.colors);
              const primaryImg =
                colorList[0]?.images?.[0] ||
                product.images?.[0] ||
                "/images/logo.png";

              return (
                <tr
                  key={product.id}
                  className="hover:bg-[#FAF7F2]/40 transition-colors"
                >
                  <td className="p-4">
                    <div className="relative w-12 h-14 rounded-lg overflow-hidden bg-neutral-100 border border-neutral-200 shrink-0">
                      <Image
                        src={primaryImg}
                        alt={product.productName}
                        fill
                        sizes="48px"
                        className="object-cover"
                      />
                    </div>
                  </td>

                  <td className="p-4 font-medium text-neutral-900">
                    {product.productName}
                  </td>

                  <td className="p-4">
                    <span className="bg-[#7A1C1C]/10 text-[#7A1C1C] text-xs font-semibold px-2.5 py-1 rounded-full">
                      {product.category}
                    </span>
                  </td>

                  <td className="p-4">
                    {colorList.length > 0 ? (
                      <div className="flex items-center gap-1.5 flex-wrap max-w-[180px]">
                        {colorList.map((col: any, idx: number) => (
                          <span
                            key={idx}
                            title={`${col.name || `Color ${idx + 1}`} (${col.images?.length || 0} photos)`}
                            className="w-4 h-4 rounded-full border border-black/20 shadow-xs inline-block"
                            style={{ backgroundColor: col.hex || "#333333" }}
                          />
                        ))}
                        <span className="text-xs text-neutral-500 font-medium ml-1">
                          ({colorList.length})
                        </span>
                      </div>
                    ) : (
                      <span className="text-xs text-neutral-400">Default</span>
                    )}
                  </td>

                  <td className="p-4 text-neutral-600">
                    {product.type || "—"}
                  </td>

                  <td className="p-4 text-neutral-600">
                    {product.size || "—"}
                  </td>

                  <td className="p-4 text-right">
                    <div className="flex items-center justify-end gap-2">
                      <Link
                        href={`/admin/products/edit/${product.id}`}
                        className="bg-neutral-100 hover:bg-neutral-200 text-neutral-800 px-3 py-1.5 rounded-lg text-xs font-medium transition"
                      >
                        Edit
                      </Link>

                      <button
                        onClick={() => handleDelete(product.id)}
                        className="bg-red-50 hover:bg-red-100 text-red-600 px-3 py-1.5 rounded-lg text-xs font-medium transition"
                      >
                        Delete
                      </button>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}