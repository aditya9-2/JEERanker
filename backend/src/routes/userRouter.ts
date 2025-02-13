import { Router } from "express";
import userRegistration from "../controllers/userRegistration.controller";
import userLogin from "../controllers/userLogin.controller";

const router = Router();

router.post('/registration', userRegistration);
router.post('/login', userLogin);

export default router;