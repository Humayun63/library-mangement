
export interface IBorrowBook {
    _id: number,
    book: number,
    quantity: number,
    dueDate: Date,
}

export interface IBorrowSummary {
    totalQuantity: number;
    book: {
        title: string,
        isbn: string,
        author: string
    }
}


export interface IBorrowBookResponse {
    success: boolean,
    message: string,
    data: IBorrowBook & {
        createdAt: string,
        updatedAt: string,
    }
}

export interface IBorrowBookSummaryResponse {
    success: boolean,
    message: string,
    data: IBorrowSummary[]
}
