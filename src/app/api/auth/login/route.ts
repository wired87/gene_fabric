import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

interface LoginRequest {
    email: string;
    password: string;
}

export async function POST(req: Request) {
    const { email, password }: LoginRequest = await req.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
    }

    const token = jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET as string,
        { expiresIn: "1h" }
    );

    return NextResponse.json({ token }, { status: 200 });
}