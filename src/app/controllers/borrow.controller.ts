import { NextFunction, Request, Response, Router } from "express";
import { BorrowBook } from "../models/borrow.model";
import { Book } from "../models/book.model";
import { BookInstanceMethods, IBook } from "../interfaces/book.interface";
import { IBorrowBook } from "../interfaces/borrow.interface";

export const borrowBookRoutes = Router();

borrowBookRoutes.post('/', async (req: Request, res: Response, next: NextFunction) => {
    try {
        const body = req.body as IBorrowBook;
        const book = await Book.findById(body.book) as IBook & BookInstanceMethods;

        if(!book.available) {
            res.status(404).json({
                success: false,
                message: 'Book is not available',
                data: {},
            })

            return;
        }

        if(book.copies < body.quantity) {
            res.status(400).json({
                success: false,
                message: `Only ${book.copies} copies book has left.`,
                data: {},
            })

            return;
        }

        await book.deductCopies(body.quantity);
        const borrowedBook = await BorrowBook.create(body);
        

        res.status(201).json({
            success: true,
            message: 'Book borrowed successfully',
            data: borrowedBook,
        })
    } catch (error) {
        next(error);
    }
})