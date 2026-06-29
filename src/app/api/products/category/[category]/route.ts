//src/app/api/products/category/[category]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  const products =
    await prisma.product.findMany({
      where: {
        category: category.toUpperCase(),
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  return NextResponse.json(products);
}