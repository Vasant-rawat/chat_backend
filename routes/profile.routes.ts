import { Router } from "express";
import { addProfile, updateProfile } from "../controllers/profiles.controller";
import { appwrite } from "../middlewares/authUser";
const router = Router();

router.post("/profile/add",[appwrite] ,addProfile);
router.patch("/profile/update" ,updateProfile);
router.patch("/profile/delete" ,updateProfile);

export default router;


