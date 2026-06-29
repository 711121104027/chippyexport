//src/app/api/designs/category/[category]/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ category: string }> }
) {
  const { category } = await params;

  const designs = await prisma.design.findMany({
    where: {
      category: category.toUpperCase() as
        | "PACKING_BOX"
        | "PACKING_BOX_DESIGN",
    },
    orderBy: {
      createdAt: "desc",
    },
  });

  return NextResponse.json(designs);
}