import type { IBook } from "@/interfaces/book.interface";
import { type FC } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

import { Button } from "@/components/ui/button"
import { MoreVertical, Pencil, Trash2, BookOpen } from "lucide-react"

interface BookActionsProps {
    book: IBook;
}
const BookActions: FC<BookActionsProps> = (props) => {
    const { 
        book 
    } = props;

    const handleAction = (action: string) => {
    console.log(`${action} clicked for:`, book.title)
  }

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
        </>
    );
};

export default BookActions;