//src/app/api/products/[id]/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const product =
    await prisma.product.findUnique({
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
  const { id } = await params;

  await prisma.product.delete({
    where: {
      id,
    },
  });

  return NextResponse.json({
    success: true,
  });
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;

  const body = await req.json();

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
      features: body.features,
      images: body.images,
    },
  });

  return NextResponse.json(product);
}