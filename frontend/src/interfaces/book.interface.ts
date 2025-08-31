export interface IBook {
    _id: number,
    title: string,
    author: string,
    genre: GenreType,
    isbn: string,
    description?: string,
    copies: number,
    available: boolean
}

export interface IGetBookResponse {
    success: boolean,
    message: string,
    data: IBook[],
}

export type GenreType = 'FICTION' | 'NON_FICTION' | 'SCIENCE' | 'SCIENCE' | 'BIOGRAPHY' | 'FANTASY'