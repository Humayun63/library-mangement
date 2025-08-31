export interface IBook {
    title: string,
    author: string,
    genre: 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'SCIENCE' | 'BIOGRAPHY' | 'FANTASY',
    isbn: string,
    description?: string,
    copies: number,
    available: boolean
}

export interface BookInstanceMethods {
    deductCopies(quantity: number): void
}