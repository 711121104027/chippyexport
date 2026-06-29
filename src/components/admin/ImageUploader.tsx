//src/components/admin/ImageUploader.tsx

"use client";

import { useState } from "react";
import Image from "next/image";

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
  const [uploading, setUploading] = useState(false);

  const uploadImages = async (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    const files = e.target.files;

    if (!files) return;

    setUploading(true);

    try {
      const uploadedUrls: string[] = [];

      for (const file of Array.from(files)) {
        const formData = new FormData();

        formData.append("file", file);

        formData.append(
          "upload_preset",
          process.env
            .NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET!
        );

        const response = await fetch(
          `https://api.cloudinary.com/v1_1/${
            process.env
              .NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME
          }/image/upload`,
          {
            method: "POST",
            body: formData,
          }
        );

        const data = await response.json();

        uploadedUrls.push(data.secure_url);
      }

      setImageUrls([
        ...imageUrls,
        ...uploadedUrls,
      ]);
    } catch (error) {
      console.error(error);
      alert("Image upload failed");
    } finally {
      setUploading(false);
    }
  };

  const removeImage = (url: string) => {
    setImageUrls(
      imageUrls.filter(
        (image) => image !== url
      )
    );
  };

  return (
    <div>
      <label className="block mb-3 font-medium">
        {label}
      </label>

      <input
  type="file"
  multiple={multiple}
  accept="image/*"
  onChange={uploadImages}
  className="w-full border rounded-lg p-3"
/>

      {uploading && (
        <p className="mt-3 text-[#7A1C1C]">
          Uploading...
        </p>
      )}

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-5">
        {imageUrls.map((url) => (
          <div
            key={url}
            className="relative"
          >
            <Image
              src={url}
              alt="product"
              width={300}
              height={300}
              className="rounded-xl object-cover w-full h-40"
            />

            <button
              type="button"
              onClick={() =>
                removeImage(url)
              }
              className="absolute top-2 right-2 bg-red-500 text-white w-7 h-7 rounded-full"
            >
              ×
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}