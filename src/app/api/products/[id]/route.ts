import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { deleteCloudinaryImages } from "@/lib/cloudinary";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product = await prisma.product.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(product);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    // 1. Fetch product to get all associated image URLs
    const product = await prisma.product.findUnique({
      where: { id },
    });

    if (product) {
      const mainImages: string[] = Array.isArray(product.images)
        ? (product.images as string[])
        : [];

      const colorImages: string[] = Array.isArray(product.colors)
        ? (product.colors as any[]).flatMap((c) => (Array.isArray(c.images) ? c.images : []))
        : [];

      const allImagesToDelete = Array.from(new Set([...mainImages, ...colorImages]));

      // 2. Automatically delete all images from Cloudinary
      if (allImagesToDelete.length > 0) {
        await deleteCloudinaryImages(allImagesToDelete);
      }

      // 3. Delete product from database
      await prisma.product.delete({
        where: { id },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Product and associated Cloudinary images deleted successfully",
    });
  } catch (error) {
    console.error("Product deletion error:", error);
    return NextResponse.json(
      { error: "Failed to delete product" },
      { status: 500 }
    );
  }
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const body = await req.json();

    // 1. Fetch existing product to compare images
    const existing = await prisma.product.findUnique({
      where: { id },
    });

    if (existing) {
      const oldMainImages: string[] = Array.isArray(existing.images)
        ? (existing.images as string[])
        : [];
      const oldColorImages: string[] = Array.isArray(existing.colors)
        ? (existing.colors as any[]).flatMap((c) => (Array.isArray(c.images) ? c.images : []))
        : [];
      const oldImages = Array.from(new Set([...oldMainImages, ...oldColorImages]));

      const newMainImages: string[] = Array.isArray(body.images) ? body.images : [];
      const newColorImages: string[] = Array.isArray(body.colors)
        ? (body.colors as any[]).flatMap((c) => (Array.isArray(c.images) ? c.images : []))
        : [];
      const newImages = Array.from(new Set([...newMainImages, ...newColorImages]));

      // Find any images that the admin removed during editing
      const removedImages = oldImages.filter((url) => !newImages.includes(url));

      if (removedImages.length > 0) {
        await deleteCloudinaryImages(removedImages);
      }
    }

    let formattedColors = body.colors;
    if (typeof formattedColors === "string") {
      try {
        formattedColors = JSON.parse(formattedColors);
      } catch (e) {
        formattedColors = [];
      }
    }

    const product = await prisma.product.update({
      where: {
        id,
      },
      data: {
        productName: body.productName,
        category: body.category,
        type: body.type,
        size: body.size,
        description: body.description,
        features: body.features || [],
        images: body.images || [],
        colors: formattedColors || [],
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.error("Product update error:", error);
    return NextResponse.json(
      { error: "Failed to update product" },
      { status: 500 }
    );
  }
}