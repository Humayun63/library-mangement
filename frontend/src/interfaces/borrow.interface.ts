
export interface IBorrowBook {
    book: number,
    quantity: number,
    dueDate: Date,
}

export interface IBorrowSummary {
    bookTitle: string;
    isbn: string;
    totalQuantity: number;
}