import { Router } from "express";


import { validate } from "@/middlewares/validation.middleware";
import { loginSchema, registerSchema } from "@/validators/auth.validator";
import { login, register } from "@/controllers/auth.controller";

const router = Router();

router.post("/register", validate(registerSchema), register);
router.post("/login", validate(loginSchema), login);

export default router;
