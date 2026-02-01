import { type NextFunction, type Request, type Response } from "express"
export const validateUserReq= (req: Request, res: Response,next:NextFunction) => {
    if (req.body.email == null) {
        return  res.status(400).send({
            message: "Please enter email"
        })
    }
    if (req.body.name == null) {
        return  res.status(400).send({
            message: "Please enter name"
        })
    }
    if (req.body.password == null) {
        return  res.status(400).send({
            message: "Please enter Password"
        })
    }
    if (req.body.userId == null) {
        return  res.status(400).send({
            message: "Please enter userId"
        })
    next()
    }




}
export const validateUserReqSignIn= (req: Request, res: Response,next:NextFunction) => {
        console.log("Validating User")
    if (req.body.email == null) {
        return  res.status(400).send({
            message: "Please enter email"
        })
    }
    if (req.body.password == null) {
        return  res.status(400).send({
            message: "Please enter Password"
        })
    }
    next()
}
