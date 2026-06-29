import { NextResponse } from "next/server";

export async function POST(
  req: Request
) {
  const body = await req.json();

  if (
    body.username === process.env.ADMIN_USERNAME &&
    body.password === process.env.ADMIN_PASSWORD
  ) {
    return NextResponse.json({
      success: true,
      token: "admin-authenticated",
    });
  }

  return NextResponse.json(
    {
      success: false,
      message: "Invalid credentials",
    },
    {
      status: 401,
    }
  );
}