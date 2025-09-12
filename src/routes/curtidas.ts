import { Router } from "express";
import { CurtidasController } from "../controller/CurtidasController";

const router = Router();
const controller: CurtidasController = new CurtidasController();

router.get('/count/:idpost', controller.countLikesByPost.bind(controller));
router.post('/:iduser/:idpost', controller.updateLikes.bind(controller));

export default router;