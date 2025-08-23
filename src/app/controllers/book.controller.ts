import { NextFunction, Request, Response, Router } from "express";
import { Book } from "../models/book.modle";

export const bookRoutes = Router();

bookRoutes.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const books = await Book.find();
        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books
        })
    } catch(error) {
        next(error);
    }
});