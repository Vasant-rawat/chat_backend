import { Router } from "express";
import { singin, singup } from "../controllers/auth.controller"
import { validateUserReq ,validateUserReqSignIn} from "../middlewares/validateUserReq";
const router = Router();
router.post("/auth/singup", [validateUserReq], singup);
router.post("/auth/singin", [validateUserReqSignIn], singin);
export default router;
