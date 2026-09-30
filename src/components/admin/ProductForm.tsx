//src/components/admin/ProductForm.tsx

"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import FeatureInput from "./FeatureInput";
import ColorVariantManager from "./ColorVariantManager";
import ImageUploader from "./ImageUploader";
import { ColorVariant, parseProductColors } from "@/types/product";

interface ProductFormProps {
  initialData?: any;
  productId?: string;
}

export default function ProductForm({
  initialData,
  productId,
}: ProductFormProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [productName, setProductName] = useState(
    initialData?.productName || ""
  );

  const [category, setCategory] = useState(
    initialData?.category || "MEN"
  );

  const [gender, setGender] = useState(
    initialData?.gender || "Boys"
  );

  const [type, setType] = useState(initialData?.type || "");

  const [size, setSize] = useState(initialData?.size || "");

  const [description, setDescription] = useState(
    initialData?.description || ""
  );

  const [features, setFeatures] = useState<string[]>(
    initialData?.features || []
  );

  // Common product images
  const [images, setImages] = useState<string[]>(() => {
    if (initialData?.images && Array.isArray(initialData.images) && initialData.images.length > 0) {
      return initialData.images;
    }
    // Fallback if legacy images existed inside colors
    const parsedColors = parseProductColors(initialData?.colors);
    const colorImgs = parsedColors.flatMap((c) => c.images || []);
    if (colorImgs.length > 0) return colorImgs;

    return [];
  });

  // Colors (swatches / names)
  const [colors, setColors] = useState<ColorVariant[]>(() => {
    const existing = parseProductColors(initialData?.colors);
    if (existing.length > 0) return existing;
    return [];
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      setLoading(true);

      if (images.length === 0) {
        alert("Please upload at least one product photo.");
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
            gender: category === "KIDS" ? gender : null,
            type,
            size,
            description,
            features,
            images,
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

      router.push("/admin/product");
      router.refresh();
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

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
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

        {/* Gender Selection - ONLY for Kids category */}
        {category === "KIDS" && (
          <div>
            <label className="block mb-2 font-medium text-neutral-800">
              Kids Gender
            </label>
            <select
              value={gender}
              onChange={(e) => setGender(e.target.value)}
              className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C] bg-[#FAF7F2]"
            >
              <option value="Boys">Boys</option>
              <option value="Girls">Girls</option>
              <option value="Toddler Boys">Toddler Boys</option>
              <option value="Toddler Girls">Toddler Girls</option>
            </select>
          </div>
        )}
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
          placeholder="e.g. S, M, L, XL, XXL (or 2-4 Yrs, 4-6 Yrs)"
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

      {/* Common Product Images Upload */}
      <div className="pt-4 border-t border-neutral-200">
        <ImageUploader
          imageUrls={images}
          setImageUrls={setImages}
          label="Product Photos (Common Image Upload)"
          multiple={true}
        />
      </div>

      {/* Color Variants & Picker Manager */}
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
          cursor-pointer
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