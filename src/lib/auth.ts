import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { NextResponse } from 'next/server';
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const JWT_SECRET = process.env.JWT_SECRET as string;
if (!JWT_SECRET) {
    throw new Error('JWT_SECRET is not defined');
}
const JWT_EXPIRATION = '15m';
const REFRESH_TOKEN_EXPIRATION = '7d';

// Helper function to generate tokens
function generateTokens(user: { id: any; email: any; }) {
    const accessToken = jwt.sign(
        { userId: user.id, email: user.email },
        JWT_SECRET,
        { expiresIn: JWT_EXPIRATION }
    );

    const refreshToken = jwt.sign(
        { userId: user.id },
        JWT_SECRET,
        { expiresIn: REFRESH_TOKEN_EXPIRATION }
    );

    return { accessToken, refreshToken };
}

// Login API
export async function POST(request: { json: () => PromiseLike<{ email: any; password: any; }> | { email: any; password: any; }; }) {
    const { email, password } = await request.json();

    const user = await prisma.user.findUnique({ where: { email } });

    if (!user || !(await bcrypt.compare(password, user.password))) {
        return NextResponse.json({ error: 'Invalid email or password' }, { status: 401 });
    }

    const tokens = generateTokens(user);

    // Store refresh token in the database
    await prisma.refreshToken.create({
        data: {
            token: tokens.refreshToken,
            userId: user.id
        }
    });

    return NextResponse.json(tokens);
}

// Refresh Token API
export async function PUT(request) {
    const { refreshToken } = await request.json();

    if (!refreshToken) {
        return NextResponse.json({ error: 'Refresh token is required' }, { status: 400 });
    }

    try {
        const decoded = jwt.verify(refreshToken, JWT_SECRET);
        const user = await prisma.user.findUnique({ where: { id: decoded.userId } });

        if (!user) {
            return NextResponse.json({ error: 'Invalid refresh token' }, { status: 401 });
        }

        const tokens = generateTokens(user);

        await prisma.refreshToken.update({
            where: { token: refreshToken },
            data: { token: tokens.refreshToken }
        });

        return NextResponse.json(tokens);
    } catch (error) {
        return NextResponse.json({ error: 'Invalid or expired refresh token' }, { status: 401 });
    }
}

// Logout API
export async function DELETE(request) {
    const { refreshToken } = await request.json();

    await prisma.refreshToken.deleteMany({ where: { token: refreshToken } });

    return NextResponse.json({ message: 'Logged out successfully' });
}
