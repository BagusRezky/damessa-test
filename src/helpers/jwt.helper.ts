import { ENV } from "@/config/env";
import jwt, { JwtPayload } from "jsonwebtoken";

export const generateToken = (payload:object): string => 
    jwt.sign(payload, ENV.JWT_SECRET, { expiresIn: '1h' });

export const verifyToken = (token:string): JwtPayload | string =>
    jwt.verify(token, ENV.JWT_SECRET);

