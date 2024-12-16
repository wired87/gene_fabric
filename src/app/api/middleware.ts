import jwt, { JwtPayload } from "jsonwebtoken";

export function authenticate(token: string): JwtPayload | null {
    try {
        return jwt.verify(token, process.env.JWT_SECRET as string) as JwtPayload;
    } catch (error) {
        return null;
    }
}