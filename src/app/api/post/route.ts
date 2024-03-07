import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";

import { z } from "zod";
import { authOptions } from "@/lib/auth";

const postSchema = z.object({
  title: z.string().min(2, {
    message: "Title must be at least 2 characters.",
  }),
  authorId: z.number({
    required_error: "Author cannot be empty. Please provide your age.",
  }),
  published: z.boolean().default(false),
  categories: z.any(),
});

export async function POST(req: any) {
  try {
    const body = await req.json();
    const {
      state,
      city,
      title,
      age,
      location,
      serviceGender,
      postBody,
      contact,
      receiveCall,
      pictures,
      services,
      physical,
      published,
      authorId,
      bdsmActivity,
      visibleToGoogle,
      disclaimer,
      categoryId,
    } = body;

    const post = await db.post.create({
      data: {
        state,
        city,
        title,
        age,
        location,
        serviceGender,
        postBody,
        contact,
        receiveCall,
        pictures,
        services: {
          create: services,
        },
        physical: {
          create: physical,
        },
        published,
        authorId,
        categoryId,
        bdsmActivity,
        visibleToGoogle,
        disclaimer,
      },
    });

    return NextResponse.json(post);
  } catch (error) {
    return NextResponse.json(error);
  }
}

export async function GET(req: any) {
  try {
    const posts = await db.post.findMany({
      include: {
        category: true,
      },
    });

    return NextResponse.json(posts);
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
