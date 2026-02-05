import { Router } from "express";
import todoRouters from "../modules/todo/todo.routes";
const router = Router();
router.use("/todos", todoRouters);
export default router;
