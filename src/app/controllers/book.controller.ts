import { NextFunction, Request, Response, Router } from "express";
import { Book } from "../models/book.modle";

export const bookRoutes = Router();

bookRoutes.get('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const {
            filter,
            limit = 10,
            sortBy,
            sort = 'desc',
        } = req.query;

        const sortOptions: any = {}
        const query: any = {}

        if(filter) query.genre = filter;
        if(sort) {
            sortOptions[sortBy as string] =  sort
        }

        const books = await Book.find(query)
            .sort(sortOptions)
            .limit(parseInt(limit as string));

        res.status(200).json({
            success: true,
            message: "Books retrieved successfully",
            data: books,
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

bookRoutes.get('/:bookId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.bookId;

        const book = await Book.findById(id);

        res.status(200).json({
            success: true,
            message: "Book retrieved successfully",
            data: book,
        })
    } catch(error) {
        next(error);
    }
});

bookRoutes.patch('/:bookId', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const id = req.params.bookId;
        const body = req.body;
        const options = {
            new: true,
        }

        const book = await Book.findByIdAndUpdate(id, body, options);

        res.status(200).json({
            success: true,
            message: "Book updated successfully",
            data: book,
        })
    } catch(error) {
        next(error);
    }
});