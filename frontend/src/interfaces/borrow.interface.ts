
export interface IBorrowBook {
    _id: number,
    book: number,
    quantity: number,
    dueDate: Date,
}

export interface IBorrowSummary {
    bookTitle: string;
    isbn: string;
    totalQuantity: number;
}