import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import { NextResponse } from "next/server";

interface RegisterRequest {
    name: string;
    email: string;
    password: string;
}

export async function POST(req: Request) {
    const { name, email, password }: RegisterRequest = await req.json();

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
        const user = await prisma.user.create({
            data: { name, email, password: hashedPassword },
        });
        return NextResponse.json(user, { status: 201 });
    } catch (error) {
        return NextResponse.json({ error: "User already exists" }, { status: 500 });
    }
}