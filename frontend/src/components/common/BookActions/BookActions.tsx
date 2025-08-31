import type { IBook } from "@/interfaces/book.interface";
import { useState } from "react";
import BorrowDialog from "./BorrowDialog";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { MoreVertical, Pencil, Trash2, BookOpen } from "lucide-react"
import DeleteConfirmDialog from "./DeleteConfirmDialog";
import EditBook from "../EditBook/EditBook";

interface BookActionsProps {
    book: IBook;
}

const BookActions = (props: BookActionsProps) => {
    const { book } = props;
    const [isOpenEdit, setIsOpenEdit] = useState(false);
    const [isOpenDelete, setIsOpenDelete] = useState(false);
    const [isOpenBorrow, setIsOpenBorrow] = useState(false);

    const handleAction = (action: string) => {
        if (action === "Edit") {
            setIsOpenEdit(true);
        } else if (action === "Delete") {
            setIsOpenDelete(true);
        } else if (action === "Borrow") {
            setIsOpenBorrow(true);
        }
    };

    return (
        <>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="ghost" size="icon" className="cursor-pointer">
                        <MoreVertical className="h-4 w-4" />
                    </Button>
                </DropdownMenuTrigger>

                <DropdownMenuContent align="end">
                    <DropdownMenuItem onClick={() => handleAction("Edit")} className="cursor-pointer">
                        <Pencil className="h-4 w-4 mr-2" />
                        Edit
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => handleAction("Borrow")} className="cursor-pointer">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Borrow
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => handleAction("Delete")} className="cursor-pointer">
                        <Trash2 className="h-4 w-4 mr-2 text-red-600" />
                        Delete
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <EditBook 
                book={book} 
                open={isOpenEdit} 
                onOpenChange={setIsOpenEdit} 
            />


            <DeleteConfirmDialog
                open={isOpenDelete}
                onOpenChange={setIsOpenDelete}
                bookId={book._id}
                title="Delete Book"
                description={`Are you sure you want to delete "${book.title}"? This action cannot be undone.`}
            />

            <BorrowDialog
                open={isOpenBorrow}
                onOpenChange={setIsOpenBorrow}
                book={book}
            />
        </>
    );
};

export default BookActions;