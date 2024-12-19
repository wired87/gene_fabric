import { NextResponse } from 'next/server';
import { handleRefreshToken } from '@/lib/auth';

export async function POST(req: { json: () => PromiseLike<{ refreshToken: any; }> | { refreshToken: any; }; }) {
    try {
        const { refreshToken } = await req.json();
        const tokens = await handleRefreshToken(refreshToken);
        return NextResponse.json(tokens);
    } catch (err) {
        if (err instanceof Error) {
            return NextResponse.json({ error: err.message }, { status: 401 });
        }
        return NextResponse.json({ error: 'Unknown error' }, { status: 401 });
    }
}
