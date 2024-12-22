"use client";

import { cookies } from "next/headers";

// Set a cookie
export async function setCookie(
    name: string,
    value: string,
    options: {
        httpOnly?: boolean;
        secure?: boolean;
        maxAge?: number;
        path?: string;
        sameSite?: "strict" | "lax" | "none";
    } = {}
) {
    const cookieStore = cookies();
    (await cookieStore).set(name, value, {
        httpOnly: options.httpOnly ?? true,
        secure: options.secure ?? process.env.NODE_ENV === "production",
        path: options.path ?? "/",
        maxAge: options.maxAge ?? 7 * 24 * 60 * 60, // 7 days
        sameSite: options.sameSite ?? "strict",
    });
}

// Get a cookie
export async function getCookie(name: string): Promise<string | undefined> {
    const cookieStore = await cookies();
    return cookieStore.get(name)?.value;
}

// Clear a cookie
export async function clearCookie(name: string, options: { path?: string } = {}) {
    const cookieStore = cookies();
    (await cookieStore).set(name, "", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        path: options.path ?? "/",
        expires: new Date(0), // Expire immediately
    });
}