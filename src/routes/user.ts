import { Router } from "express";
import { UsuariosController } from "../controller/UsuariosController";
import { avatarUpload } from "../../middlewares/multer/avatarUpload";

const router = Router();
const controller: UsuariosController = new UsuariosController();

router.post('/', avatarUpload, controller.createUser.bind(controller));
router.route("/:iduser")
    .get(controller.getUserByID.bind(controller))
    .patch(controller.updateUser.bind(controller))
    .delete(controller.deleteUser.bind(controller));
router.get('/email/:email', controller.getUserByEmail.bind(controller));

export default router;