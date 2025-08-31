import { useState, type FC } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogTitle,
} from "@/components/ui/dialog"

import type { IBook } from "@/interfaces/book.interface";
import AddBookForm from "@/features/addBook/AddBookForm/AddBookForm";
import { useUpdateBookMutation } from "@/redux/features/books/bookApi";

interface EditBookProps {
    book: IBook,
    isOpen: boolean,
    onClose: () => void;
}

const EditBook: FC<EditBookProps> = ({ book, isOpen, onClose }) => {
    const [updateBook, { isLoading, isSuccess, error }] = useUpdateBookMutation();

    const handleSubmit = async (data: Partial<IBook>) => {
        try {
            const res = await updateBook({ id: book._id, data }).unwrap();
            if(res.success){
                onClose();
            }
        } catch (error) {
            console.error("Failed to update book:", error);
        }
    }

    return (
        <>
            <Dialog open={isOpen} onOpenChange={(open) => { if (!open) onClose(); }}>
                <DialogContent  className="w-full max-w-[95vw] md:max-w-xl sm:max-h-[90vh] max-h-[calc(100vh-2rem)] p-0 overflow-hidden flex flex-col">
                    <DialogHeader className="px-4 pt-4">
                        <DialogTitle>Edit Book</DialogTitle>
                    </DialogHeader>

                    <div className="overflow-auto flex-1 px-4 pb-4 scrollbar scrollbar-thumb-gray-300 dark:scrollbar-thumb-gray-600 scrollbar-track-transparent scrollbar-thin scrollbar-thumb-rounded">

                        <AddBookForm
                            initialData={book}
                            onSubmit={handleSubmit}
                            loading={isLoading}
                        />
                    </div>
                </DialogContent>
            </Dialog>
        </>
    );
};

export default EditBook;
