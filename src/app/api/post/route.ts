import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { type NextRequest } from "next/server";

export async function POST(req: NextRequest): Promise<void | Response> {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await req.json();
    const {
      countryId,
      stateId,
      cityId,
      title,
      age,
      location,
      categoryId,
      serviceGender,
      postBody,
      contact,
      receiveCall,
      pictures,
      published,
      ethnicity,
      hairColor,
      tatoo,
      seeClient,
      workingHours,
      paymentMethods,
      bdsmActivity,
      visibleToGoogle,
      disclaimer,
    } = await body;

    const post = await db.post.create({
      data: {
        countryId: 1,
        stateId,
        cityId,
        title,
        age,
        location,
        categoryId,
        serviceGender,
        postBody,
        contact,
        receiveCall,
        pictures,
        published,
        authorId: Number(session?.user.id),
        ethnicity,
        hairColor,
        tatoo,
        seeClient,
        workingHours,
        paymentMethods,
        bdsmActivity,
        visibleToGoogle,
        disclaimer,
      },
    });

    return NextResponse.json(post, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}

export async function GET(req: any, { params }: { params: { id: number } }) {
  const session = await getServerSession(authOptions);

  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  if (session.user.role !== "ADMIN") {
    return NextResponse.json({ error: "Forbidden" }, { status: 403 });
  }

  try {
    const posts = await db.post.findMany({
      include: {
        city: true,
      },
      take: 10,
    });

    return NextResponse.json(posts, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
