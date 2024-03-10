import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    const states = await db.state.findMany({
      include: {
        cities: true,
      },
    });

    return NextResponse.json(states, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
