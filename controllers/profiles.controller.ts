import { database } from "../config/appwrite";
import { ID, Permission, Query, Role } from "node-appwrite";
import { response, type Request, type Response } from "express";
import { AppwriteConfig } from "../utils/conf";
export const addProfile = async (req: Request, res: Response) => {
    const { name, userId } = req.body || { name: "vasant23", userId: "6978e7619436f0994396" };
    const newProfile = {
        "user_id": name
    }
    try {


        const response = await database.createRow(
            AppwriteConfig.DATABASE_ID,
            "profiles",
            ID.unique(),
            newProfile,
            [
                Permission.read(Role.any())
                , Permission.delete(Role.user(userId))
            ]
        )
        res.status(200).send({
            message: response
        })

        console.log(response);
    } catch (error) {
        res.status(404).send({
            message: error
        })
    }
}

export const updateProfile = async (req: Request, res: Response) => {
    const userId = "vasant23";
    try {
        const data = {
            "user_name": "vasant1",
            "bio": "Android Developer"
        }
        const response = await database.listRows(
            AppwriteConfig.DATABASE_ID,
            'profiles',
            [Query.equal('user_id', userId)]
        );
        if (response.rows.length === 0) {
            res.status(404).send({
                message: "Profile not found"
            })
        }
        const documentId = response.rows[0]?.$id
        console.warn(documentId);
        if (documentId !== null) {
            const update = await database.updateRow(
                AppwriteConfig.DATABASE_ID,
                "profiles",
                documentId!,
                data
            )
            res.status(200).send({ message: update })


        }

    } catch (error) {
        res.status(403).json({ error: error });
    }

}

export const deleteProfile = async (req: Request, res: Response) => {
    const userId = "vasant23"
    try {
        const query = await database.listRows(
            AppwriteConfig.DATABASE_ID,
            'profiles',
            [Query.equal('user_id', userId)]
        )
        if (query.rows.length === 0) {
            res.status(404).send({
                message: "Profile not found"
            })
        }
        const rowId = query.rows[0]?.$id
        const process = await database.deleteRow(
            AppwriteConfig.DATABASE_ID,
            "profiles"
            , rowId!
        )
        res.status(200).send({
            message: process
        });
    } catch (error) {
        res.status(403).send({
            message: process
        });

    }

}


