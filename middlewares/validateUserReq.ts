import { type NextFunction, type Request, type Response } from "express"
export const validateUserReq= (req: Request, res: Response,next:NextFunction) => {
    if (req.body.email == null) {
        res.status(404).send({
            message: "Please enter email"
        })
    }
    if (req.body.name == null) {
        res.status(404).send({
            message: "Please enter name"
        })
    }
    if (req.body.password == null) {
        res.status(404).send({
            message: "Please enter Password"
        })
    }
    if (req.body.userId == null) {
        res.status(404).send({
            message: "Please enter userId"
        })
    next()
    }




}
export const validateUserReqSignIn= (req: Request, res: Response,next:NextFunction) => {
        console.log("Validating User")
    if (req.body.email == null) {
        res.status(404).send({
            message: "Please enter email"
        })
    }
    if (req.body.password == null) {
        res.status(404).send({
            message: "Please enter Password"
        })
    }
    next()
}
