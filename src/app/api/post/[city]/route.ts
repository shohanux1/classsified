import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: { city: string } }) {
  try {
    const posts = await db.post.findMany({
      where: {
        city: {
          slug: params.city,
        },
      },
      include: {
        city: true,
      },
    });

    return NextResponse.json({
      status: 200,
      message: "Posts retrieved successfully",
      posts,
    });
  } catch (error) {
    return NextResponse.json({
      status: 500,
      message: "Internal Server Error",
    });
  }
}
