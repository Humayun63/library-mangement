import type { IBook } from "@/interfaces/book.interface";
import { type FC } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import BookActions from "../BookActions/BookActions";
import { Link } from "react-router";

interface BookCardProps {
    book: IBook;
}

const BookCard: FC<BookCardProps> = (props) => {
    const {
        book
    } = props;

    return(
        <>
            <Card>
                <CardHeader>
                    <div className="flex justify-between">
                        <div>
                            <CardTitle>
                                <Link to={`/books/${book._id}`}>
                                    {book.title}
                                </Link>
                            </CardTitle>
                            <p className="text-sm text-gray-500">{book.author}</p>
                        </div>

                        <BookActions book={book} />
                    </div>
                </CardHeader>

                <CardContent className="space-y-2">
                    <p className="text-sm">Genre: {book?.genre?.split('_').join(' ')}</p>
                    <p className="text-sm">ISBN: {book?.isbn}</p>
                    <p className="text-sm">Copies: {book?.copies}</p>
                    <p className="text-sm">
                        Availability:{" "}
                        <span
                            className={`font-medium ${
                            book.available ? "text-green-600" : "text-red-600"
                            }`}
                        >
                            {book.available ? "Available" : "Unavailable"}
                        </span>
                    </p>
                </CardContent>
            </Card>
        </>
    );
};

export default BookCard;