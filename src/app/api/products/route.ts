//src/app/api/products/route.ts
import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";
export const revalidate = 0;

export async function GET() {
  try {
    const products = await prisma.product.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(products);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch products" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    let formattedColors = body.colors;
    if (typeof formattedColors === "string") {
      try {
        formattedColors = JSON.parse(formattedColors);
      } catch (e) {
        formattedColors = [];
      }
    }

    const product = await prisma.product.create({
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
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create product" },
      { status: 500 }
    );
  }
}