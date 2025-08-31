import { 
    Table, 
    TableBody, 
    TableCell, 
    TableHead, 
    TableHeader, 
    TableRow 
} from "@/components/ui/table"
import { type FC } from "react";
import BookActions from "../BookActions/BookActions";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import { Link } from "react-router";

const BookTable: FC = () => {
    const { data, isLoading } = useGetBooksQuery();

    if(isLoading){
        return <div>Loading...</div>
    }
    return (
        <div className="overflow-x-auto rounded-md border">
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Title</TableHead>
                        <TableHead>Author</TableHead>
                        <TableHead>Genre</TableHead>
                        <TableHead>ISBN</TableHead>
                        <TableHead>Copies</TableHead>
                        <TableHead>Availability</TableHead>
                        <TableHead>Actions</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {data?.data?.map((book) => (
                        <TableRow key={book._id}>
                            <TableCell className="font-medium">
                                <Link to={`/books/${book._id}`}>
                                    {book.title}
                                </Link>
                            </TableCell>

                            <TableCell>{book?.author}</TableCell>
                            <TableCell>{book?.genre?.split('_').join(' ')}</TableCell>
                            <TableCell>{book?.isbn}</TableCell>
                            <TableCell>{book?.copies}</TableCell>
                            <TableCell>
                                <span
                                    className={`font-medium ${
                                    book.available ? "text-green-600" : "text-red-600"
                                    }`}
                                >
                                    {book.available ? "Available" : "Unavailable"}
                                </span>
                            </TableCell>
                            <TableCell>
                                <BookActions book={book} />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    );
};

export default BookTable;