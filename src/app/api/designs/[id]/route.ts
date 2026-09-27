import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { deleteCloudinaryImage } from "@/lib/cloudinary";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const design = await prisma.design.findUnique({
    where: {
      id,
    },
  });

  return NextResponse.json(design);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;

    const design = await prisma.design.findUnique({
      where: { id },
    });

    if (design && design.image) {
      await deleteCloudinaryImage(design.image);
      await prisma.design.delete({
        where: { id },
      });
    }

    return NextResponse.json({
      success: true,
      message: "Design and associated Cloudinary image deleted successfully",
    });
  } catch (error) {
    console.error("Design deletion error:", error);
    return NextResponse.json(
      { error: "Failed to delete design" },
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

    const existing = await prisma.design.findUnique({
      where: { id },
    });

    if (existing && existing.image && existing.image !== body.image) {
      await deleteCloudinaryImage(existing.image);
    }

    const design = await prisma.design.update({
      where: {
        id,
      },
      data: {
        designName: body.designName,
        category: body.category,
        image: body.image,
      },
    });

    return NextResponse.json(design);
  } catch (error) {
    console.error("Design update error:", error);
    return NextResponse.json(
      { error: "Failed to update design" },
      { status: 500 }
    );
  }
}