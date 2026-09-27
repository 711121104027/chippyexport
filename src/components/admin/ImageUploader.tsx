//src/components/admin/ImageUploader.tsx

"use client";

import { useState } from "react";
import Image from "next/image";
import { compressImageToMax1MB } from "@/lib/imageCompression";

interface Props {
  imageUrls: string[];
  setImageUrls: (urls: string[]) => void;
  label?: string;
  multiple?: boolean;
}

export default function ImageUploader({
  imageUrls,
  setImageUrls,
  label = "Product Images",
  multiple = true,
}: Props) {
  const [statusMessage, setStatusMessage] = useState<string | null>(null);
  const [deletingUrl, setDeletingUrl] = useState<string | null>(null);

  const uploadImages = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files || files.length === 0) return;

    try {
      const uploadedUrls: string[] = [];

      for (let i = 0; i < files.length; i++) {
        const rawFile = files[i];
        setStatusMessage(
          `Optimizing photo ${i + 1}/${files.length} (reducing to ≤ 1MB)...`
        );

        // 1. Auto compress / optimize image to <= 1MB
        const optimizedFile = await compressImageToMax1MB(rawFile, 1024 * 1024);

        setStatusMessage(
          `Uploading photo ${i + 1}/${files.length} (${(optimizedFile.size / 1024).toFixed(0)} KB)...`
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

      setImageUrls([...imageUrls, ...uploadedUrls]);
    } catch (error) {
      console.error("Image upload error:", error);
      alert("Image upload failed");
    } finally {
      setStatusMessage(null);
      e.target.value = "";
    }
  };

  const removeImage = async (url: string) => {
    setDeletingUrl(url);
    try {
      // 1. Delete image from state
      setImageUrls(imageUrls.filter((image) => image !== url));

      // 2. Automatically delete from Cloudinary in background
      await fetch("/api/admin/cloudinary/delete", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ url }),
      });
    } catch (err) {
      console.error("Failed to delete image from Cloudinary:", err);
    } finally {
      setDeletingUrl(null);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-between mb-2">
        <label className="block font-medium text-neutral-800">{label}</label>
        <span className="text-xs text-neutral-500">
          Auto-optimizes to ≤ 1MB HD
        </span>
      </div>

      <input
        type="file"
        multiple={multiple}
        accept="image/*"
        disabled={Boolean(statusMessage)}
        onChange={uploadImages}
        className="w-full border border-neutral-300 rounded-xl p-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#7A1C1C]/20"
      />

      {statusMessage && (
        <div className="mt-2.5 flex items-center gap-2 text-xs text-[#7A1C1C] font-medium bg-[#7A1C1C]/5 p-2 rounded-lg">
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
          {statusMessage}
        </div>
      )}

      {imageUrls.length > 0 && (
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {imageUrls.map((url) => (
            <div
              key={url}
              className="relative aspect-square rounded-xl overflow-hidden border border-neutral-200 group bg-neutral-100"
            >
              <Image
                src={url}
                alt="Product image preview"
                fill
                sizes="(max-width: 768px) 50vw, 25vw"
                className="object-cover"
              />

              <button
                type="button"
                disabled={deletingUrl === url}
                onClick={() => removeImage(url)}
                title="Remove photo & delete from Cloudinary"
                className="
                  absolute top-2 right-2
                  bg-red-600 hover:bg-red-700
                  text-white
                  w-7 h-7
                  rounded-full
                  flex items-center justify-center
                  shadow-md
                  transition
                  opacity-90 hover:opacity-100
                "
              >
                {deletingUrl === url ? "..." : "×"}
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}