import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

// export async function POST(req: any) {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return null;
//   }

//   try {
//     const body = await req.json();
//     const {
//       countryId,
//       stateId,
//       cityId,
//       title,
//       age,
//       location,
//       categoryId,
//       serviceGender,
//       postBody,
//       contact,
//       receiveCall,
//       pictures,
//       published,
//       ethnicity,
//       hairColor,
//       tatoo,
//       seeClient,
//       workingHours,
//       paymentMethods,
//       bdsmActivity,
//       visibleToGoogle,
//       disclaimer,
//     } = await body;

//     const post = await db.post.create({
//       data: {
//         countryId: 1,
//         stateId,
//         cityId,
//         title,
//         age,
//         location,
//         categoryId,
//         serviceGender,
//         postBody,
//         contact,
//         receiveCall,
//         pictures: [""],
//         published,
//         authorId: Number(session?.user.id),
//         ethnicity,
//         hairColor,
//         tatoo,
//         seeClient,
//         workingHours,
//         paymentMethods,
//         bdsmActivity,
//         visibleToGoogle,
//         disclaimer,
//       },
//     });

//     return NextResponse.json({ status: 201 });
//   } catch (error) {
//     return NextResponse.json(error, { status: 500 });
//   }
// }

export async function POST(request: Request) {
  // const session = await getServerSession(authOptions);

  // if (!session) {
  //   return null;
  // }

  try {
    const body = await request.json();
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
        pictures: [""],
        published,
        // authorId: Number(session?.user.id),
        authorId: 1,
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

    return new Response("Your post has been successfully created.", {
      status: 201,
    });
  } catch (error: any) {
    return new Response(`Error: ${error.message}`, {
      status: 400,
    });
  }
}
