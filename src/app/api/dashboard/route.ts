//src/app/api/dashboard/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const total = await prisma.product.count();

    const men = await prisma.product.count({
      where: {
        category: "MEN",
      },
    });

    const women = await prisma.product.count({
      where: {
        category: "WOMEN",
      },
    });

    const kids = await prisma.product.count({
      where: {
        category: "KIDS",
      },
    });

    return NextResponse.json({
      total,
      men,
      women,
      kids,
    });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch dashboard data" },
      { status: 500 }
    );
  }
}