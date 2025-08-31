
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


export interface IBorrowBookResponse {
    success: boolean,
    message: string,
    data: IBorrowBook & {
        createdAt: string,
        updatedAt: string
    }
}
