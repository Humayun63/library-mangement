"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.borrowBookRoutes = void 0;
const express_1 = require("express");
const borrow_model_1 = require("../models/borrow.model");
const book_model_1 = require("../models/book.model");
exports.borrowBookRoutes = (0, express_1.Router)();
exports.borrowBookRoutes.post('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const body = req.body;
        const book = yield book_model_1.Book.findById(body.book);
        if (!book) {
            res.status(404).json({
                success: false,
                message: 'Book is not found!',
                data: {},
            });
            return;
        }
        if (!book.available) {
            res.status(404).json({
                success: false,
                message: 'Book is not available',
                data: {},
            });
            return;
        }
        if (book.copies < body.quantity) {
            res.status(400).json({
                success: false,
                message: `Only ${book.copies} copies book has left.`,
                data: {},
            });
            return;
        }
        yield book.deductCopies(body.quantity);
        const borrowedBook = yield borrow_model_1.BorrowBook.create(body);
        res.status(201).json({
            success: true,
            message: 'Book borrowed successfully',
            data: borrowedBook,
        });
    }
    catch (error) {
        next(error);
    }
}));
exports.borrowBookRoutes.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const summery = yield borrow_model_1.BorrowBook.aggregate([
            {
                $group: {
                    _id: '$book',
                    totalQuantity: {
                        $sum: '$quantity'
                    }
                }
            },
            {
                $lookup: {
                    from: 'books',
                    localField: '_id',
                    foreignField: '_id',
                    as: 'details'
                }
            },
            {
                $unwind: '$details'
            },
            {
                $project: {
                    _id: 0,
                    book: {
                        title: '$details.title',
                        isbn: '$details.isbn',
                    },
                    totalQuantity: 1
                }
            }
        ]);
        res.status(200).json({
            success: true,
            message: 'Borrowed books summary retrieved successfully',
            data: summery,
        });
    }
    catch (error) {
        next(error);
    }
}));
