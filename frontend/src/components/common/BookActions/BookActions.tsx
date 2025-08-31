import type { IBook } from "@/interfaces/book.interface";
import { useState, type FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { MoreVertical, Pencil, Trash2, BookOpen } from "lucide-react"
import EditBook from "../EditBook/EditBook";

interface BookActionsProps {
    book: IBook;
}
const BookActions: FC<BookActionsProps> = (props) => {
    const { 
        book 
    } = props;

    const [isOpenEdit, setIsOpenEdit] = useState(false);

    const handleAction = (action: string) => {
        if (action === "Edit") {
            setIsOpenEdit(true);
        }
        // ...other actions can be handled here
    };

    const handleCloseEdit = () => {
        setIsOpenEdit(false);
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

                    <DropdownMenuItem onClick={() => handleAction("Delete")} className="cursor-pointer">
                        <Trash2 className="h-4 w-4 mr-2 text-red-600" />
                        Delete
                    </DropdownMenuItem>

                    <DropdownMenuItem onClick={() => handleAction("Borrow")} className="cursor-pointer">
                        <BookOpen className="h-4 w-4 mr-2" />
                        Borrow
                    </DropdownMenuItem>
                </DropdownMenuContent>
            </DropdownMenu>

            <EditBook book={book} isOpen={isOpenEdit} onClose={handleCloseEdit} />
        </>
    );
};

export default BookActions;