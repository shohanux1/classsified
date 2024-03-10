import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: { slug: string } }) {
  try {
    const posts = await db.post.findMany({
      where: {
        state: {
          slug: params.slug,
        },
      },
      include: {
        city: true,
      },
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
