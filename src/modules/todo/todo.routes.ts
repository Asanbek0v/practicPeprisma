import { Router } from "express";
import todoControlles from "./todo.controlles";

const router = Router();
router.get("/get", todoControlles.getTodo);
router.post("/create", todoControlles.createTodo);
router.put("/:id", todoControlles.updateTodo);
router.delete("/:id", todoControlles.deleteTodo);
export default router;
