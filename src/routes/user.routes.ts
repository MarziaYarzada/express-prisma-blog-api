import { validate } from "../middlewares/validate";
import { RegisterSchema, LoginSchema } from "../validators/user.validator";

import { Router } from "express";
import { register, login } from "../controllers/user.controller";

const router = Router();

router.post("/register", validate(RegisterSchema), register);
router.post("/login", validate(LoginSchema), login);

export default router;
