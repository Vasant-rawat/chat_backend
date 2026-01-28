import { Router } from "express";
import { addProfile } from "../controllers/profiles.controller";
const router = Router();

router.post("/profile/add", addProfile);

export default router;


