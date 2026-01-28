import { database } from "../config/appwrite";
import { ID, Permission, Role } from "node-appwrite";
import { type Request, type Response } from "express";
import { AppwriteConfig } from "../utils/conf";
export const addProfile = async (req: Request, res: Response) => {
    const { name, userId } = req.body || { name: "vasant23", userId: "6978e7619436f0994396" };
    const newProfile = {
        "user_id": name
    }
    try {
        const respons = await database.createDocument(
            AppwriteConfig.DATABASE_ID,
            "profiles",
            ID.unique(),
            newProfile
            , [
                Permission.read(Role.any()),          // public profile
                Permission.update(Role.user(userId)), // only owner can update
                Permission.delete(Role.user(userId))  // only owner can delete
            ]

        )
        res.status(200).send({
            message: respons
        })

        console.log(respons);
    } catch (error) {
        res.status(404).send({
            message: error
        })
    }
}

export const updateProfile = async (req: Request, res: Response) => {
    const userId = req.user.id;
    try {
        const data = {
            user_name: "vasant1",
            bio: "somethingo"
        }
        const response = await database.updateDocument(
            AppwriteConfig.DATABASE_ID,
            "profiles",
            userId, // documentId
            data
        )
        res.status(200).send({ response })
    } catch (error) {
        res.status(403).json({ error: error });
    }

}




