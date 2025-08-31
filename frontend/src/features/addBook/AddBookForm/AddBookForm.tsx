import { useEffect, useState, type FC } from "react";
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Switch } from "@/components/ui/switch"
import type { IBook } from "@/interfaces/book.interface";
import { useAddBookMutation } from "@/redux/features/books/bookApi";
import { showSuccess, showError } from "@/lib/toast";
import { Navigate } from "react-router";

interface AddBookFormProps {
    initialData?: IBook;
    onSubmit?: (data: Partial<IBook>) => void;
    loading?: boolean;
}


const AddBookForm: FC<AddBookFormProps> = (props) => {
    const { initialData, onSubmit, loading } = props;

    const [addBook, { isLoading, isSuccess, error }] = useAddBookMutation();

    const [form, setForm] = useState<Partial<IBook>>({
        title: "",
        author: "",
        genre: "FICTION",
        isbn: "",
        description: "",
        copies: 1,
        available: true,
    })

    const handleChange = (key: keyof  Partial<IBook>, value: any) => {
        let updatedValue = value

        if (key === "copies") {
            updatedValue = Math.max(0, Number(value))
        }

        setForm((prev) => {
            const newForm = { ...prev, [key]: updatedValue }
            if (key === "copies") {
                newForm.available = newForm?.copies as number > 0 ? newForm.available : false
            }
            return newForm
        })
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!form.title || !form.author || !form.genre || !form.isbn) {
            showError("Please fill all required fields");
            return;
        }
        if (onSubmit) {
            onSubmit(form);
            return;
        }
        try {
            if(isLoading) return;
            const res = await addBook(form).unwrap();
            if(res.success){
                showSuccess("Book added successfully!");
            }
        } catch (error) {
            showError("Failed to add book.");
            console.error("Error adding book:", error);
        }
    }

    useEffect(() => {
        if (initialData) {
            setForm(initialData)
        }
    }, [initialData])

    if (isSuccess) {
        return <Navigate to="/books" />;
    }

    return (
        <>
            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div className="space-y-2">
                    <Label>Title *</Label>
                    <Input
                        placeholder="Book title"
                        value={form.title}
                        onChange={(e) => handleChange("title", e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Author *</Label>
                    <Input
                        placeholder="Author name"
                        value={form.author}
                        onChange={(e) => handleChange("author", e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Genre *</Label>
                    <Select
                        value={form.genre}
                        onValueChange={(value) => handleChange("genre", value)}
                        required
                    >
                        <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select genre" />
                        </SelectTrigger>
                        
                        <SelectContent>
                            <SelectItem value="FICTION">Fiction</SelectItem>
                            <SelectItem value="NON_FICTION">Non Fiction</SelectItem>
                            <SelectItem value="SCIENCE">Science</SelectItem>
                            <SelectItem value="BIOGRAPHY">Biography</SelectItem>
                            <SelectItem value="FANTASY">Fantasy</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label>ISBN *</Label>
                    <Input
                        placeholder="ISBN number"
                        value={form.isbn}
                        onChange={(e) => handleChange("isbn", e.target.value)}
                        required
                    />
                </div>

                <div className="space-y-2">
                    <Label>Description</Label>
                    <Textarea
                        placeholder="Optional description"
                        value={form.description}
                        onChange={(e) => handleChange("description", e.target.value)}
                    />
                </div>

                <div className="space-y-2">
                    <Label>Copies *</Label>
                    <Input
                        type="number"
                        value={form.copies}
                        min={0}
                        onChange={(e) => handleChange("copies", e.target.value)}
                        required
                    />
                </div>

                <div className="flex items-center space-x-3">
                    <Switch
                        checked={form.available}
                        onCheckedChange={(checked) => handleChange("available", checked)}
                        disabled={form.copies === 0}
                    />
                    <Label>Available</Label>
                </div>

                <Button type="submit" disabled={isLoading}>
                    {
                        onSubmit ? (loading ? "Saving..." : "Save Changes") : (isLoading ? "Adding..." : "Add Book")
                    }
                </Button>
            </form>
        </>
    );
};

export default AddBookForm;