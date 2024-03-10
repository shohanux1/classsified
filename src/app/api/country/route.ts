import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { name, slug } = await req.json();

    const newCountry = await db.country.create({
      data: {
        name: name,
        slug: slug,
      },
    });

    return NextResponse.json(
      {
        newCountry,
        message: "Country successfully added ",
      },
      {
        status: 400,
      }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
