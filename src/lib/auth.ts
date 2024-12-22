import jwt, { JwtPayload } from "jsonwebtoken";

interface DecodedToken extends JwtPayload {
    id: string; // Assuming the token contains an 'id' field
}

export function verifyToken(token: string): { isValid: boolean; id?: string } {
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET as string) as DecodedToken;
        return { isValid: true, id: decoded.id };
    } catch (error) {
        if (error instanceof Error) {
            console.error("Token verification failed:", error.message);
        } else {
            console.error("Token verification failed:", error);
        }
        return { isValid: false };
    }
}

export function generateToken(payload: object, expiresIn = "1h") {
    return jwt.sign(payload, process.env.JWT_SECRET as string, { expiresIn });
}