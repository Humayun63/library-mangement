"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorrowBook = void 0;
const mongoose_1 = require("mongoose");
const borrowBookSchema = new mongoose_1.Schema({
    book: {
        type: mongoose_1.Schema.Types.ObjectId,
        ref: 'Book',
        required: true
    },
    quantity: {
        type: Number,
        required: true
    },
    dueDate: {
        type: Date,
        required: true
    }
}, {
    versionKey: false,
    timestamps: true,
});
exports.BorrowBook = (0, mongoose_1.model)('BorrowBook', borrowBookSchema);
