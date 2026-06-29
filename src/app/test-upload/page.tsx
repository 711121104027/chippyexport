"use client";

import { useState } from "react";
import ImageUploader from "@/components/admin/ImageUploader";

export default function TestUploadPage() {
  const [imageUrls, setImageUrls] =
    useState<string[]>([]);

  return (
    <div className="max-w-5xl mx-auto p-10">
      <ImageUploader
        imageUrls={imageUrls}
        setImageUrls={setImageUrls}
      />

      <pre className="mt-8">
        {JSON.stringify(
          imageUrls,
          null,
          2
        )}
      </pre>
    </div>
  );
}