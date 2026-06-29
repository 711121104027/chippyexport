//src/components/designs/DesignForm.tsx
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import ImageUploader from "@/components/admin/ImageUploader";

interface DesignFormProps {
  initialData?: {
    id?: string;
    designName: string;
    category: "PACKING_BOX" | "PACKING_BOX_DESIGN";
    image: string;
  };
}

export default function DesignForm({
  initialData,
}: DesignFormProps) {
  const router = useRouter();

  const [loading, setLoading] = useState(false);

  const [designName, setDesignName] = useState(
    initialData?.designName || ""
  );

  const [category, setCategory] = useState<
    "PACKING_BOX" | "PACKING_BOX_DESIGN"
  >(initialData?.category || "PACKING_BOX");

  const [imageUrls, setImageUrls] = useState<string[]>(
    initialData?.image ? [initialData.image] : []
  );

  async function handleSubmit(
    e: React.FormEvent
  ) {
    e.preventDefault();

    if (!imageUrls.length) {
      alert("Please upload an image");
      return;
    }

    setLoading(true);

    const payload = {
      designName,
      category,
      image: imageUrls[0],
    };

    try {
      if (initialData?.id) {
        await fetch(`/api/designs/${initialData.id}`, {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      } else {
        await fetch("/api/designs", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(payload),
        });
      }

      router.push("/admin/designs");
      router.refresh();
    } catch (error) {
      console.error(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 max-w-3xl"
    >
      {/* Design Name */}

      <div>
        <label className="block mb-2 font-medium">
          Design Name
        </label>

        <input
          value={designName}
          onChange={(e) =>
            setDesignName(e.target.value)
          }
          required
          className="w-full border rounded-lg p-3"
        />
      </div>

      {/* Category */}

      <div>
        <label className="block mb-2 font-medium">
          Category
        </label>

        <select
          value={category}
          onChange={(e) =>
            setCategory(
              e.target.value as
                | "PACKING_BOX"
                | "PACKING_BOX_DESIGN"
            )
          }
          className="w-full border rounded-lg p-3"
        >
          <option value="PACKING_BOX">
            Packing Box
          </option>

          <option value="PACKING_BOX_DESIGN">
            Packing Box Design
          </option>
        </select>
      </div>

      {/* Image Upload */}

      <ImageUploader
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
        label="Design Image"
        multiple={false}
      />

      <button
        type="submit"
        disabled={loading}
        className="
          bg-[#7A1C1C]
          hover:bg-[#611515]
          text-white
          px-8
          py-3
          rounded-xl
          font-medium
          transition
        "
      >
        {loading
          ? "Saving..."
          : initialData?.id
          ? "Update Design"
          : "Add Design"}
      </button>
    </form>
  );
}