import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function GET(req: any) {
  try {
    const category = await db.category.findMany();
    return NextResponse.json(category, { status: 200 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}
