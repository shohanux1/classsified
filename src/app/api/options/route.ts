import { db } from "@/lib/db";
import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const newBDSM = await db.bdsmActivity.create({
      data: {
        name: "I Offer More Intimate Activities",
      },
    });

    return NextResponse.json(newBDSM, { status: 201 });
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

export async function GET(req: any) {
  try {
    const bdsm = await db.bdsmActivity.findMany();
    const payment = await db.payment.findMany();
    const haircolor = await db.hairColor.findMany();
    const tatoo = await db.tatoo.findMany();
    const ethnicity = await db.ethnicity.findMany();
    const categories = await db.category.findMany();

    return NextResponse.json(
      { bdsm, payment, haircolor, tatoo, ethnicity, categories },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(error, { status: 500 });
  }
}

// export async function GET(req: any) {
//     try {
//       const getBDSM = await db.bdsmActivity.findMany();
//       const array = [1, 2, 3, 4, 5, 6];

//       // Filter getBDSM array to find objects with id matching values in array
//       const filteredData = getBDSM.filter((item) => array.includes(item.id));

//       return NextResponse.json(filteredData, { status: 200 });
//     } catch (error) {
//       return NextResponse.json(error, { status: 500 });
//     }
//   }
