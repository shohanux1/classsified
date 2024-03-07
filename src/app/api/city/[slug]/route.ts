import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any, { params }: { params: { slug: string } }) {
  try {
    const slug = params.slug;

    const cities = await db.city.findMany({
      where: {
        state: {
          slug: slug,
        },
      },
    });

    const state = await db.state.findMany({
      where: {
        id: cities[0].stateId,
      },
    });

    return NextResponse.json(
      { cities, stateName: state[0].name },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
