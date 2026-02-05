import { Request, Response } from "express";
import { prisma } from "../../config/prisma";

const getTodo = async (req: Request, res: Response) => {
  try {
    const todo = await prisma.todo.findMany({
      orderBy: {
        createdAt: "desc",
      },
    });
    res.status(200).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
      message: `server error in getTodo ${error}`,
    });
  }
};
const createTodo = async (req: Request, res: Response) => {
  try {
    const { title, desc, age } = req.body;

    if (!title || !desc || age === undefined) {
      return res.status(400).json({
        success: false,
        message: "title, desc жана age талап кылынат",
      });
    }

    const todo = await prisma.todo.create({
      data: { title, desc, age },
    });

    return res.status(201).json({
      success: true,
      data: todo,
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: `error in createTodo ${String(error)}`,
    });
  }
};

const updateTodo = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);
    const { title, desc, age } = req.body;
    const todo = await prisma.todo.update({
      where: { id },
      data: { title, desc, age },
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `error in updatetodo ${error}`,
    });
  }
};
const deleteTodo = async (req: Request, res: Response) => {
  try {
    const id = Number(req.params.id);

    const todo = await prisma.todo.delete({
      where: { id: id },
    });
    res.status(200).json(todo);
  } catch (error) {
    res.status(404).json({
      success: false,
      message: `error in deletetodo ${error}`,
    });
  }
};
export default {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo,
};
