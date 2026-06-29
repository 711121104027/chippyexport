//src/app/api/products/category/[category]/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { Category } from "@prisma/client";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  const validCategories: Category[] = [
    "MEN",
    "WOMEN",
    "KIDS",
  ];

  const formattedCategory =
    category.toUpperCase();

  if (
    !validCategories.includes(
      formattedCategory as Category
    )
  ) {
    return NextResponse.json(
      { error: "Invalid category" },
      { status: 400 }
    );
  }

  const products =
    await prisma.product.findMany({
      where: {
        category:
          formattedCategory as Category,
      },
      orderBy: {
        createdAt: "desc",
      },
    });

  return NextResponse.json(products);
}