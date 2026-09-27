//src/app/api/admin/cloudinary/delete/route.ts

import { NextResponse } from "next/server";
import { deleteCloudinaryImage, deleteCloudinaryImages } from "@/lib/cloudinary";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    if (body.url) {
      const res = await deleteCloudinaryImage(body.url);
      return NextResponse.json({ success: true, result: res });
    }

    if (Array.isArray(body.urls) && body.urls.length > 0) {
      const res = await deleteCloudinaryImages(body.urls);
      return NextResponse.json({ success: true, result: res });
    }

    return NextResponse.json(
      { error: "Missing 'url' or 'urls' in request body" },
      { status: 400 }
    );
  } catch (error) {
    console.error("Cloudinary delete API error:", error);
    return NextResponse.json(
      { error: "Failed to delete Cloudinary image" },
      { status: 500 }
    );
  }
}
