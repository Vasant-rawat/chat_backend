import type { NextFunction, Request, Response } from "express";
import { Account, Client } from "node-appwrite";

export const appwrite = async (req: Request, res: Response, next: NextFunction) => {
    const header = req.headers["authorization"]
    if (typeof header != "string") {
        return res.status(401).json({
            message: "Header is missing"
        });

    }
    if ( !header.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Missing token keys"
        });
    }
    const jwt= header.slice(7);
    try {

        const client = new Client()
            .setEndpoint(process.env.API_END_POINTS!)
            .setProject(process.env.APPWRITE_ID!)
            .setJWT(jwt);

        const account = new Account(client)
        const user = await account.get();
        req.user = { id: user.$id };
        next();
    } catch (error) {

    }
}
