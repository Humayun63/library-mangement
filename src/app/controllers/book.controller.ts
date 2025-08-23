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

bookRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body;

        const book = await Book.create(body);

        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: book,
        })
    } catch (error) {
        next(error);
    }
})