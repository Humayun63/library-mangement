import { type FC, useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogHeader,
    DialogFooter,
    DialogTitle,
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useDeleteBookMutation } from "@/redux/features/books/bookApi";

interface DeleteConfirmDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    bookId: string | number;
    title?: string;
    description?: string;
}

const DeleteConfirmDialog: FC<DeleteConfirmDialogProps> = (props) => {
    const {
        open,
        onOpenChange,
        bookId,
        title = "Delete",
        description = "Are you sure you want to delete this item? This action cannot be undone.",
    } = props;

    const [deleteBook, { isLoading }] = useDeleteBookMutation();
    const [error, setError] = useState<string | null>(null);

    const handleCancel = () => {
        setError(null);
        onOpenChange(false);
    };

    const handleDelete = async () => {
        setError(null);
        try {
            await deleteBook(String(bookId)).unwrap();
            onOpenChange(false);
        } catch (err: any) {
            setError(err?.data?.message || "Failed to delete.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>{title}</DialogTitle>
                    <DialogDescription>{description}</DialogDescription>
                </DialogHeader>
                {error && (
                    <div className="text-red-500 text-sm mb-2">{error}</div>
                )}
                <DialogFooter>
                    <Button variant="outline" onClick={handleCancel} disabled={isLoading}>
                        Cancel
                    </Button>
                    <Button variant="destructive" onClick={handleDelete} disabled={isLoading}>
                        {isLoading ? "Deleting..." : "Delete"}
                    </Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteConfirmDialog;
