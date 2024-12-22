import { verifyToken } from "@/lib/auth";
import jwt, { JwtPayload } from "jsonwebtoken";

export function authenticate(token: string): JwtPayload | null {
    try {
        return jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    } catch (error) {
        return null;
    }
}


import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
    const protectedRoutes = ['/auth/edit'];

    if (protectedRoutes.some((route) => req.nextUrl.pathname.startsWith(route))) {
        const token = req.headers.get('authorization')?.split(' ')[1];

        if (!token || !verifyToken(token)) {
            return NextResponse.redirect(new URL('/auth/login', req.url));
        }
    }

    return NextResponse.next();
}

export const config = {
    matcher: ['/auth/edit/:path*'],
};