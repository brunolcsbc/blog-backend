import { Router } from "express";
import { PostsController } from "../controller/PostsController";

const router = Router();
const controller: PostsController = new PostsController();

router.post('/', controller.createPost.bind(controller));
router.get('/all', controller.getAllPosts.bind(controller));
router.get('/all/byuser/:iduser', controller.getAllPostsByUser.bind(controller));
router.get('/searchcontent', controller.getPostsBySearchContent.bind(controller));
router.get('/searchtitle', controller.getPostsBySearchTitle.bind(controller));
router.get('/search/likedbyuser/:iduser', controller.getPostsLikedByUser.bind(controller));
router.route("/:idpost")
    .get(controller.getPostByID.bind(controller))
    .patch(controller.updatePost.bind(controller))
    .delete(controller.deletePost.bind(controller));

export default router;