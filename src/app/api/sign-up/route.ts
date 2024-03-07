import { db } from "@/lib/db";
import { NextResponse } from "next/server";
import bcrypt from 'bcrypt'
import { z } from "zod";


const userSchema = z.object({
    email: z.string().email({ message: "Invalid email address" }),
    password : z.string({
        required_error: "Password is required",
      }),
      role : z.enum(["USER", "ADMIN"], {
        required_error: "You need to select a notification type.",
      })
  });

export async function POST(req: any) {

    try {
        const body = await req.json()
        const { email, password, role } = userSchema.parse(body)

        const isExistingUser = await db.user.findUnique({
            where: { email: email }
        });

        if (isExistingUser) {
            return NextResponse.json({ message: "Email has already been used" }, { status: 409 });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = await db.user.create({
            data: {
                email,
                password: hashedPassword,
                role
            }
        });

        const { password: userPassword, ...userData } = newUser;

        return NextResponse.json({ user: userData, message: "User created successfully" }, { status: 201 });
    } catch (error ) {
        return NextResponse.json(error);
    }


}
