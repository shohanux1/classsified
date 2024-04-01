import { authOptions } from "@/lib/auth";
import { db } from "@/lib/db";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: { id: number } }) {
  try {
    const posts = await db.post.findMany({
      where: {
        authorId: Number(params.id),
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

export async function DELETE(req: any, { params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const post = await db.post.findMany({
      where: {
        id: Number(params.id),
      },
    });

    if (!post) {
      return NextResponse.json({ error: "Post not found" }, { status: 404 });
    }

    if (
      post[0].authorId !== Number(session?.user.id) &&
      session?.user.role !== "ADMIN"
    ) {
      return NextResponse.json({ error: "Forbidden" }, { status: 403 });
    }

    await db.post.delete({
      where: {
        id: Number(params.id),
      },
    });

    return NextResponse.json(
      { message: "Post deleted successfully" },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
