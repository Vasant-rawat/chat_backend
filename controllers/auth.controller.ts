import { type Request, type Response } from "express"
import { account } from "../config/appwrite"
export const signup = async (req: Request, res: Response) => {
    const { email, password, userId, name } = req.body
    try {
        const result = await account.create({
            name: name,
            userId: userId,
            email: email,
            password: password
        })
        console.log(`${result}`)
        res.status(200).send({
            message: result
        })
    } catch (e) {
        res.status(505).send({
            message: `Some Error Has been occcure ${e}`
        })

    }
}

export const singin = async (req: Request, res: Response) => {
    const { email, password } = req.body;
    try {
        console.log("singing")
        const result = await account.createEmailPasswordSession({
            email: email,
            password: password
        });
        res.status(200).send({
            content: result
        })
    } catch (error) {
        res.status(505).send({
            message: `Some Error Has been occcure ${error}`
        })
    }

}

