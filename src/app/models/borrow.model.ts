import { model, Schema } from "mongoose";
import { IBorrowBook } from "../interfaces/borrow.interface";

const borrowBookSchema = new Schema<IBorrowBook>({
    book: {
        type: Schema.Types.ObjectId,
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

export const BorrowBook = model<IBorrowBook>('BorrowBook', borrowBookSchema);