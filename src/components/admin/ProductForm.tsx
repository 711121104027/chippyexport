//src/components/admin/ProductForm.tsx

"use client";

import { useState } from "react";
import ImageUploader from "./ImageUploader";
import FeatureInput from "./FeatureInput";

interface ProductFormProps {
  initialData?: any;
  productId?: string;
}

export default function ProductForm({
  initialData,
  productId,
}: ProductFormProps) {
  const [loading, setLoading] = useState(false);

  const [productName, setProductName] =
  useState(initialData?.productName || "");

const [category, setCategory] =
  useState(initialData?.category || "MEN");

const [type, setType] =
  useState(initialData?.type || "");

const [size, setSize] =
  useState(initialData?.size || "");

const [description, setDescription] =
  useState(initialData?.description || "");

const [features, setFeatures] =
  useState<string[]>(initialData?.features || []);

const [imageUrls, setImageUrls] =
  useState<string[]>(initialData?.images || []);

  const handleSubmit = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    try {
      setLoading(true);

      const response = await fetch(
  productId
    ? `/api/products/${productId}`
    : "/api/products",
        {
          method: productId ? "PUT" : "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            productName,
            category,
            type,
            size,
            description,
            features,
            images: imageUrls,
          }),
        }
      );

      if (!response.ok) {
        throw new Error();
      }

      alert("Product Added");

      setProductName("");
      setCategory("MEN");
      setType("");
      setSize("");
      setDescription("");
      setFeatures([]);
      setImageUrls([]);
    } catch (error) {
      console.error(error);
      alert("Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6"
    >
      <div>
        <label className="block mb-2">
          Product Name
        </label>

        <input
          value={productName}
          onChange={(e) =>
            setProductName(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
          required
        />
      </div>

      <div>
        <label className="block mb-2">
          Category
        </label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        >
          <option value="MEN">
            Men
          </option>

          <option value="WOMEN">
            Women
          </option>

          <option value="KIDS">
            Kids
          </option>
        </select>
      </div>

      <div>
        <label className="block mb-2">
          Type
        </label>

        <input
          value={type}
          onChange={(e) =>
            setType(e.target.value)
          }
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Size
        </label>

        <input
          value={size}
          onChange={(e) =>
            setSize(e.target.value)
          }
          placeholder="S,M,L,XL"
          className="w-full border rounded-xl p-3"
        />
      </div>

      <div>
        <label className="block mb-2">
          Description
        </label>

        <textarea
          rows={5}
          value={description}
          onChange={(e) =>
            setDescription(
              e.target.value
            )
          }
          className="w-full border rounded-xl p-3"
        />
      </div>

      <FeatureInput
        features={features}
        setFeatures={setFeatures}
      />

      <ImageUploader
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
      />

      <button
        disabled={loading}
        className="
          bg-[#7A1C1C]
          text-white
          px-8
          py-3
          rounded-xl
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