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
exports.Book = void 0;
const mongoose_1 = require("mongoose");
const borrow_model_1 = require("./borrow.model");
const bookSchema = new mongoose_1.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true,
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    genre: {
        type: String,
        enum: ['FICTION', 'NON_FICTION', 'SCIENCE', 'SCIENCE', 'BIOGRAPHY', 'FANTASY'],
        required: true,
    },
    description: {
        type: String,
        required: false,
    },
    available: {
        type: Boolean,
        default: true
    },
    copies: {
        type: Number,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true,
});
bookSchema.method("deductCopies", function (quantity) {
    return __awaiter(this, void 0, void 0, function* () {
        this.copies -= quantity;
        if (this.copies <= 0) {
            this.copies = 0;
            this.available = false;
        }
        yield this.save();
    });
});
bookSchema.pre('save', function (next) {
    if (this.copies > 0) {
        this.available = true;
    }
    else {
        this.available = false;
    }
    next();
});
bookSchema.post('findOneAndDelete', function (doc) {
    return __awaiter(this, void 0, void 0, function* () {
        if (doc) {
            yield borrow_model_1.BorrowBook.deleteMany({ book: doc._id });
        }
    });
});
exports.Book = (0, mongoose_1.model)('Book', bookSchema);
