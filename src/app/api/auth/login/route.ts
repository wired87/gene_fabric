import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { NextResponse } from "next/server";

const prisma = new PrismaClient();

interface LoginRequest {
    email: string;
    password: string;
}

// Generate JWT tokens
function generateAccessToken(user: { id: string; email: string }) {
    return jwt.sign(user, process.env.JWT_SECRET as string, { expiresIn: "15m" });
}

function generateRefreshToken(user: { id: string; email: string }) {
    return jwt.sign(user, process.env.JWT_REFRESH_SECRET as string, { expiresIn: "7d" });
}

export async function POST(req: Request) {
    try {
        const { email, password }: LoginRequest = await req.json();

        // Validate request payload
        if (!email || !password) {
            return NextResponse.json(
                { error: "Email and password are required" },
                { status: 400 }
            );
        }

        // Find user by email
        const user = await prisma.user.findUnique({ where: { email } });

        // Generic error message to avoid leaking details
        if (!user || !(await bcrypt.compare(password, user.password))) {
            return NextResponse.json(
                { error: "Invalid email or password" },
                { status: 401 }
            );
        }

        // Generate tokens
        const accessTokenPromise = generateAccessToken({
            id: String(user.id),
            email: user.email,
        });

        const refreshTokenPromise = generateRefreshToken({
            id: String(user.id),
            email: user.email,
        });

        const [accessToken, refreshToken] = await Promise.all([
            accessTokenPromise,
            refreshTokenPromise,
        ]);

        // Save refresh token with expiration
        await prisma.refreshToken.create({
            data: {
                token: refreshToken,
                userId: Number(user.id),
                expiresAt: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days
            },
        });

        // Return tokens
        return NextResponse.json({ accessToken, refreshToken }, { status: 200 });
    } catch (error) {
        console.error("Error during login:", error);
        return NextResponse.json(
            { error: "Something went wrong" },
            { status: 500 }
        );
    }
}