//src/app/api/designs/route.ts

import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const designs = await prisma.design.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });

    return NextResponse.json(designs);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to fetch designs" },
      { status: 500 }
    );
  }
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const design = await prisma.design.create({
      data: {
        designName: body.designName,
        category: body.category,
        image: body.image,
      },
    });

    return NextResponse.json(design);
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { error: "Failed to create design" },
      { status: 500 }
    );
  }
}