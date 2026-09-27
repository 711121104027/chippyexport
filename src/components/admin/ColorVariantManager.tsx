//src/components/admin/ColorVariantManager.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { Plus, Trash2, Upload, Palette } from "lucide-react";
import { ColorVariant } from "@/types/product";
import { compressImageToMax1MB } from "@/lib/imageCompression";

interface ColorVariantManagerProps {
  colors: ColorVariant[];
  setColors: (colors: ColorVariant[]) => void;
}

const PRESET_COLORS = [
  { name: "Black", hex: "#111827" },
  { name: "White", hex: "#FFFFFF" },
  { name: "Navy", hex: "#1E3A8A" },
  { name: "Maroon", hex: "#7A1C1C" },
  { name: "Charcoal", hex: "#374151" },
  { name: "Olive", hex: "#4D7C0F" },
  { name: "Wine", hex: "#831843" },
  { name: "Sky Blue", hex: "#0284C7" },
  { name: "Beige", hex: "#D6D3D1" },
  { name: "Pine Green", hex: "#065F46" },
];

export default function ColorVariantManager({
  colors,
  setColors,
}: ColorVariantManagerProps) {
  const [uploadingIndex, setUploadingIndex] = useState<number | null>(null);
  const [uploadStatus, setUploadStatus] = useState<string | null>(null);

  const addColorVariant = () => {
    setColors([
      ...colors,
      {
        name: "",
        hex: "#1E3A8A",
        images: [],
      },
    ]);
  };

  const removeColorVariant = async (index: number) => {
    const targetVariant = colors[index];
    // If variant has images, delete them from Cloudinary
    if (targetVariant && Array.isArray(targetVariant.images) && targetVariant.images.length > 0) {
      try {
        await fetch("/api/admin/cloudinary/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ urls: targetVariant.images }),
        });
      } catch (err) {
        console.error("Failed to delete variant images from Cloudinary:", err);
      }
    }
    setColors(colors.filter((_, i) => i !== index));
  };

  const updateColorField = (
    index: number,
    field: keyof ColorVariant,
    value: any
  ) => {
    const updated = [...colors];
    updated[index] = {
      ...updated[index],
      [field]: value,
    };
    setColors(updated);
  };

  const handleImageUpload = async (
    index: number,
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    setUploadingIndex(index);

    try {
      const uploadedUrls: string[] = [];
      const fileList = Array.from(files);

      for (let i = 0; i < fileList.length; i++) {
        const rawFile = fileList[i];
        setUploadStatus(`Optimizing photo ${i + 1}/${fileList.length} (reducing to ≤ 1MB)...`);

        // 1. Auto-compress image to <= 1MB
        const optimizedFile = await compressImageToMax1MB(rawFile, 1024 * 1024);

        setUploadStatus(
          `Uploading ${i + 1}/${fileList.length} (${(optimizedFile.size / 1024).toFixed(0)} KB)...`
        );

        // 2. Upload to Cloudinary
        const formData = new FormData();
        formData.append("file", optimizedFile);
        formData.append(
          "upload_preset",
          process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
        );

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME}/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();
        if (data.secure_url) {
          uploadedUrls.push(data.secure_url);
        }
      }

      const updated = [...colors];
      updated[index] = {
        ...updated[index],
        images: [...(updated[index].images || []), ...uploadedUrls],
      };
      setColors(updated);
    } catch (error) {
      console.error("Color image upload failed:", error);
      alert("Failed to upload image for color variant");
    } finally {
      setUploadingIndex(null);
      setUploadStatus(null);
      e.target.value = "";
    }
  };

  const removeColorImage = async (colorIndex: number, imageIndex: number) => {
    const targetUrl = colors[colorIndex]?.images?.[imageIndex];

    const updated = [...colors];
    updated[colorIndex].images = updated[colorIndex].images.filter(
      (_, i) => i !== imageIndex
    );
    setColors(updated);

    // Automatically remove from Cloudinary
    if (targetUrl) {
      try {
        await fetch("/api/admin/cloudinary/delete", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ url: targetUrl }),
        });
      } catch (err) {
        console.error("Failed to delete color image from Cloudinary:", err);
      }
    }
  };

  return (
    <div className="space-y-4 pt-4 border-t border-neutral-200">
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 flex items-center gap-2">
            <Palette className="w-5 h-5 text-[#7A1C1C]" />
            Color Variants
          </h3>
          <p className="text-xs text-neutral-500 mt-0.5">
            Add different colors and their specific product photos. Users can click color swatches to switch product images.
          </p>
        </div>

        <button
          type="button"
          onClick={addColorVariant}
          className="
            inline-flex items-center gap-1.5
            bg-[#7A1C1C] text-white
            px-4 py-2 rounded-xl
            text-sm font-medium
            hover:bg-[#641515] transition
            shadow-sm
          "
        >
          <Plus size={16} />
          Add Color
        </button>
      </div>

      {colors.length === 0 ? (
        <div className="p-6 border-2 border-dashed border-neutral-200 rounded-2xl text-center bg-[#FAF7F2]/50">
          <p className="text-sm text-neutral-500">
            No color variants added yet. Click <strong>&quot;Add Color&quot;</strong> to add colors (e.g. Black, Navy, Moonstone) with their respective images.
          </p>
        </div>
      ) : (
        <div className="space-y-6">
          {colors.map((color, colorIdx) => (
            <div
              key={colorIdx}
              className="p-5 border border-neutral-200 rounded-2xl bg-white shadow-sm space-y-4"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="flex-1 grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Color Name */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Color Name (e.g. Navy Blue, Moonstone)
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Moonstone, Jet Black"
                      value={color.name}
                      onChange={(e) =>
                        updateColorField(colorIdx, "name", e.target.value)
                      }
                      className="w-full border border-neutral-300 rounded-xl px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
                      required
                    />
                  </div>

                  {/* Color Code / Hex */}
                  <div>
                    <label className="block text-xs font-semibold text-neutral-700 mb-1">
                      Color Swatch / Hex Code
                    </label>
                    <div className="flex items-center gap-2">
                      <input
                        type="color"
                        value={color.hex || "#1E3A8A"}
                        onChange={(e) =>
                          updateColorField(colorIdx, "hex", e.target.value)
                        }
                        className="w-10 h-10 rounded-lg cursor-pointer border border-neutral-300 p-0.5"
                      />
                      <input
                        type="text"
                        placeholder="#1E3A8A"
                        value={color.hex || ""}
                        onChange={(e) =>
                          updateColorField(colorIdx, "hex", e.target.value)
                        }
                        className="flex-1 border border-neutral-300 rounded-xl px-3 py-2 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20 focus:border-[#7A1C1C]"
                      />
                    </div>
                  </div>
                </div>

                {/* Delete Variant Button */}
                <button
                  type="button"
                  onClick={() => removeColorVariant(colorIdx)}
                  className="p-2 text-red-500 hover:bg-red-50 rounded-xl transition"
                  title="Remove this color variant"
                >
                  <Trash2 size={18} />
                </button>
              </div>

              {/* Quick Preset Colors */}
              <div>
                <span className="text-[11px] text-neutral-500 block mb-1.5">
                  Quick Presets:
                </span>
                <div className="flex flex-wrap gap-1.5">
                  {PRESET_COLORS.map((preset) => (
                    <button
                      key={preset.name}
                      type="button"
                      onClick={() => {
                        updateColorField(colorIdx, "hex", preset.hex);
                        if (!color.name) {
                          updateColorField(colorIdx, "name", preset.name);
                        }
                      }}
                      className="inline-flex items-center gap-1.5 px-2 py-1 rounded-lg border border-neutral-200 text-xs hover:bg-neutral-50 transition"
                    >
                      <span
                        className="w-3 h-3 rounded-full border border-neutral-300"
                        style={{ backgroundColor: preset.hex }}
                      />
                      {preset.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Color Specific Images */}
              <div className="pt-2 border-t border-neutral-100">
                <div className="flex items-center justify-between mb-2">
                  <label className="text-xs font-semibold text-neutral-700">
                    Images for &quot;{color.name || `Color #${colorIdx + 1}`}&quot; ({color.images?.length || 0})
                  </label>
                  <label className="cursor-pointer inline-flex items-center gap-1 text-xs text-[#7A1C1C] hover:underline font-medium">
                    <Upload size={13} />
                    {uploadingIndex === colorIdx ? "Processing..." : "Upload Photos"}
                    <input
                      type="file"
                      multiple
                      accept="image/*"
                      disabled={uploadingIndex === colorIdx}
                      onChange={(e) => handleImageUpload(colorIdx, e)}
                      className="hidden"
                    />
                  </label>
                </div>

                {uploadingIndex === colorIdx && uploadStatus && (
                  <div className="mb-3 flex items-center gap-2 text-xs text-[#7A1C1C] font-medium bg-[#7A1C1C]/5 p-2 rounded-lg">
                    <svg
                      className="animate-spin h-3.5 w-3.5 text-[#7A1C1C]"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      />
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v8H4z"
                      />
                    </svg>
                    {uploadStatus}
                  </div>
                )}

                {color.images && color.images.length > 0 ? (
                  <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-3">
                    {color.images.map((imgUrl, imgIdx) => (
                      <div
                        key={imgIdx}
                        className="relative aspect-square rounded-xl overflow-hidden border border-neutral-200 group bg-neutral-50"
                      >
                        <Image
                          src={imgUrl}
                          alt={`${color.name} preview ${imgIdx + 1}`}
                          fill
                          sizes="120px"
                          className="object-cover"
                        />
                        <button
                          type="button"
                          onClick={() => removeColorImage(colorIdx, imgIdx)}
                          className="
                            absolute top-1 right-1
                            bg-red-600 text-white
                            w-5 h-5 rounded-full
                            flex items-center justify-center
                            text-xs opacity-0 group-hover:opacity-100
                            hover:bg-red-700 transition
                          "
                        >
                          ×
                        </button>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-xs text-neutral-400 italic">
                    No images uploaded for this color yet.
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
