//src/components/admin/ProductForm.tsx

"use client";

import { useState } from "react";
import FeatureInput from "./FeatureInput";
import ColorVariantManager from "./ColorVariantManager";
import { ColorVariant, parseProductColors } from "@/types/product";

interface ProductFormProps {
  initialData?: any;
  productId?: string;
}

export default function ProductForm({
  initialData,
  productId,
}: ProductFormProps) {
  const [loading, setLoading] = useState(false);

  const [productName, setProductName] = useState(
    initialData?.productName || ""
  );

  const [category, setCategory] = useState(
    initialData?.category || "MEN"
  );

  const [type, setType] = useState(initialData?.type || "");

  const [size, setSize] = useState(initialData?.size || "");

  const [description, setDescription] = useState(
    initialData?.description || ""
  );

  const [features, setFeatures] = useState<string[]>(
    initialData?.features || []
  );

  // Initialize colors: from initialData.colors, or fallback from initialData.images
  const [colors, setColors] = useState<ColorVariant[]>(() => {
    const existing = parseProductColors(initialData?.colors);
    if (existing.length > 0) return existing;

    if (
      initialData?.images &&
      Array.isArray(initialData.images) &&
      initialData.images.length > 0
    ) {
      return [
        {
          name: "Standard",
          hex: "#111827",
          images: initialData.images,
        },
      ];
    }
    return [];
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      // Collect all images from color variants
      const effectiveImages = colors.flatMap((c) => c.images || []);

      if (colors.length === 0 || effectiveImages.length === 0) {
        alert("Please add at least one color variant with product photos.");
        setLoading(false);
        return;
      }

      const response = await fetch(
        productId ? `/api/products/${productId}` : "/api/products",
        {
          method: productId ? "PUT" : "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            productName,
            category,
            type,
            size,
            description,
            features,
            images: effectiveImages,
            colors,
          }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to save product");
      }

      alert(
        productId
          ? "Product Updated Successfully!"
          : "Product Added Successfully!"
      );

      if (!productId) {
        setProductName("");
        setCategory("MEN");
        setType("");
        setSize("");
        setDescription("");
        setFeatures([]);
        setColors([]);
      }
    } catch (error) {
      console.error(error);
      alert("Failed to save product");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label className="block mb-2 font-medium text-neutral-800">
          Product Name
        </label>
        <input
          value={productName}
          onChange={(e) => setProductName(e.target.value)}
          placeholder="e.g. Cotton Boxers"
          className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
          required
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-neutral-800">
          Category
        </label>
        <select
          value={category}
          onChange={(e) => setCategory(e.target.value)}
          className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
        >
          <option value="MEN">Men</option>
          <option value="WOMEN">Women</option>
          <option value="KIDS">Kids</option>
        </select>
      </div>

      <div>
        <label className="block mb-2 font-medium text-neutral-800">
          Type
        </label>
        <input
          value={type}
          onChange={(e) => setType(e.target.value)}
          placeholder="e.g. Printed, Solid, Trunk"
          className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-neutral-800">
          Size
        </label>
        <input
          value={size}
          onChange={(e) => setSize(e.target.value)}
          placeholder="e.g. S, M, L, XL, XXL"
          className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
        />
      </div>

      <div>
        <label className="block mb-2 font-medium text-neutral-800">
          Description
        </label>
        <textarea
          rows={5}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          placeholder="Describe the material, fit, and comfort..."
          className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
        />
      </div>

      <FeatureInput features={features} setFeatures={setFeatures} />

      {/* Single Color Variant & Photo Manager Section */}
      <ColorVariantManager colors={colors} setColors={setColors} />

      <button
        type="submit"
        disabled={loading}
        className="
          bg-[#7A1C1C]
          text-white
          px-8
          py-3.5
          rounded-xl
          font-medium
          hover:bg-[#641515]
          transition
          shadow-md
          disabled:opacity-50
        "
      >
        {loading
          ? "Saving..."
          : productId
          ? "Update Product"
          : "Save Product"}
      </button>
    </form>
  );
}