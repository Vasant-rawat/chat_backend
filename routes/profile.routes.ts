import { Router } from "express";
import { addProfile } from "../controllers/profiles.controller";
import { appwrite } from "../middlewares/authUser";
const router = Router();

router.post("/profile/add",[appwrite] ,addProfile);
router.put("/profile/update",[appwrite] ,addProfile);

export default router;


