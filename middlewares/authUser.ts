import type { NextFunction, Request, Response } from "express";
import { Account, Client } from "node-appwrite";

export const appwrite=async (req:Request,res:Response,next:NextFunction)=>{
    const auth=req.headers.authorization
    if(!auth ||!auth.startsWith("Bearer ")){
        return res.status(401).json({
            message:"Missing token keys"
        });
    }
    const jwt=auth.split(' ')[1];
    try {

    const client= new Client()
    .setEndpoint(process.env.API_END_POINTS!)
    .setProject(process.env.APPWRITE_ID!);
const account =new Account(client)
        const user = await account.get();
        req.user={id:user.$id};
        next();
    } catch (error) {
        
    }
}
