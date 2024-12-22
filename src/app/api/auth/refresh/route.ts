import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { refreshToken }: { refreshToken: string } = await req.json();

    if (!refreshToken) {
        return NextResponse.json({ error: "Refresh token required" }, { status: 401 });
    }

    const user = await prisma.refreshToken.findFirst({
        where: { token: refreshToken }
    });
    console.log("User id", user);

    if (!user) {
        return NextResponse.json({ error: "Invalid refresh token" }, { status: 403 });
    }

    try {
        const payload = jwt.verify(
            refreshToken,
            process.env.JWT_REFRESH_SECRET as string
        ) as { id: string; email: string };

        const newAccessToken = jwt.sign(
            { id: payload.id, email: payload.email },
            process.env.JWT_SECRET as string,
            { expiresIn: "15m" }
        );

        return NextResponse.json({ accessToken: newAccessToken }, { status: 200 });
    } catch (err) {
        return NextResponse.json({ error: "Token expired or invalid" }, { status: 403 });
    }
}