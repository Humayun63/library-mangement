import { model, Schema, Model, Document } from "mongoose";
import { BookInstanceMethods, IBook } from "../interfaces/book.interface";
import { BorrowBook } from "./borrow.model";

type BookModel = Model<IBook, {}, BookInstanceMethods>;

const bookSchema = new Schema<IBook, BookModel, BookInstanceMethods>({
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

bookSchema.method("deductCopies", async function (quantity: number) {
    this.copies -= quantity;

    if (this.copies <= 0) {
        this.copies = 0;
        this.available = false;
    }

    await this.save();
})

bookSchema.pre<IBook>('save', function(next){
    if (this.copies > 0) {
        this.available = true;
    } else {
        this.available = false;
    }
    next();
})

bookSchema.post<IBook>('findOneAndDelete', async function(doc: Document){
    if(doc) {
        await BorrowBook.deleteMany({book: doc._id})
    }
})

export const Book = model<IBook, BookModel>('Book', bookSchema);