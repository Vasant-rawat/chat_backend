import type { NextFunction, Request, Response } from "express";
import { Account, Client } from "node-appwrite";

export const appwrite = async (req: Request, res: Response, next: NextFunction) => {
    const header =
        req.cookies?.accessToken ||
        req.header("Authorization")?.replace("Bearer", "");
    console.warn(header);
    if (typeof header != "string") {
        return res.status(401).json({
            message: "Header is missing"
        });

    }

    if (header.startsWith("Bearer ")) {
        return res.status(401).json({
            message: "Missing token keys"
        });
    }
    try {

        const client = new Client()
            .setEndpoint(process.env.API_END_POINTS!)
            .setProject(process.env.APPWRITE_ID!)
            .setJWT(header);

        const account = new Account(client)
        const user = await account.get();
        req.user = { id: user.$id };
        next();
    } catch (error) {
        return res.status(401).json({ message: error });
    }
}
