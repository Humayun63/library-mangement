import { model, Schema, Model } from "mongoose";
import { BookInstanceMethods, IBook } from "../interfaces/book.interface";

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
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
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

export const Book = model<IBook, BookModel>('Book', bookSchema);