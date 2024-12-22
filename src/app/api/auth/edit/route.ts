import { PrismaClient } from "@prisma/client";
import { NextResponse } from "next/server";
import { verifyToken } from "@/lib/auth";

const prisma = new PrismaClient();

export async function PUT(req: Request) {
    const token = req.headers.get("authorization")?.split(" ")[1];

    if (!token) {
        return NextResponse.json(
            { message: "Missing token" },
            { status: 401 }
        );
    }

    const { isValid, id } = verifyToken(token);
    if (!isValid) {
        return NextResponse.json(
            { message: "Invalid token" },
            { status: 401 }
        );
    }

    try {
        const { name, email } = await req.json();

        // Validate inputs
        if (!name || !email) {
            return NextResponse.json(
                { message: "Bad request" },
                { status: 400 }
            );
        }

        const updatedUser = await prisma.user.update({
            where: { id: Number(id) },
            data: { name, email },
        });

        return NextResponse.json(
            { message: "User updated", user: updatedUser },
            { status: 200 }
        );
    } catch (error) {
        return NextResponse.json(
            { message: "Something went wrong", error: (error as Error).message },
            { status: 500 }
        );
    }
}