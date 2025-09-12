import { Router } from "express";
import { LoginController } from "../controller/login";

const router = Router();
const controller: LoginController = new LoginController();

router.post('/login', controller.login.bind(controller));
router.post('/logout', controller.logout.bind(controller));
router.get('/refresh', controller.refreshToken.bind(controller));

export default router;