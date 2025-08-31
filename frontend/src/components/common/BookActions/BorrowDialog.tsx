import { type FC, useState } from "react";
import { 
    Dialog, 
    DialogContent, 
    DialogHeader, 
    DialogTitle, 
    DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import type { IBook } from "@/interfaces/book.interface";

import { useBorrowBookMutation } from "@/redux/features/borrows/borrowApi";
import { useNavigate } from "react-router";
import { DatePicker } from "@/components/ui/date-picker";

interface BorrowDialogProps {
    open: boolean;
    onOpenChange: (open: boolean) => void;
    book: IBook;
}


const BorrowDialog: FC<BorrowDialogProps> = (props) => {
    const { open, onOpenChange, book } = props;
    const [quantity, setQuantity] = useState(1);
    const [dueDate, setDueDate] = useState<Date | undefined>(undefined);
    const [error, setError] = useState("");
    const [borrowBook, { isLoading }] = useBorrowBookMutation();
    const navigate = useNavigate();

    const today = new Date().toISOString().split("T")[0];

    const handleBorrow = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError("");
        
        if (quantity < 1 || quantity > book?.copies) {
            setError(`Quantity must be between 1 and ${book?.copies}`);
            return;
        }
        if (!dueDate || new Date(dueDate) < new Date(today)) {
            setError("Due date cannot be in the past");
            return;
        }
        try {
            await borrowBook({ book: book._id, quantity, dueDate: new Date(dueDate) }).unwrap();
            onOpenChange(false);
            navigate("/borrow-summary");
        } catch (e) {
            setError("Failed to borrow book. Please try again.");
        }
    };

    return (
        <Dialog open={open} onOpenChange={onOpenChange}>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle>Borrow Book</DialogTitle>
                    <small>
                        {book.title} by {book.author}
                    </small>
                    <DialogDescription>
                        Please fill the form to borrow the book.
                    </DialogDescription>
                </DialogHeader>

                <form onSubmit={handleBorrow} className="space-y-6">
                    <div className="space-y-2">
                        <Label htmlFor="quantity">Borrow Quantity</Label>
                        <Input
                            id="quantity"
                            type="number"
                            min={1}
                            max={book?.copies}
                            value={quantity}
                            onChange={e => setQuantity(Number(e.target.value))}
                            required
                        />
                        <small className="text-xs text-muted-foreground">Available: {book?.copies} {book?.copies > 1 ? "copies" : "copy"}</small>
                    </div>

                    <div className="space-y-2">
                        <Label htmlFor="dueDate">Due Date</Label>
                        <DatePicker className="w-full" disablePastDates={true} onChange={setDueDate} />
                    </div>

                    {error && <div className="text-red-500 text-xs mb-2">{error}</div>}

                    <div className="flex justify-end">
                        <Button type="submit" className="w-full" disabled={isLoading}>
                            {isLoading ? "Borrowing..." : "Borrow"}
                        </Button>
                    </div>
                </form>
            </DialogContent>
        </Dialog>
    );
};

export default BorrowDialog;
