import { Button } from "@/components/ui/button";
import { Grid, TableIcon } from "lucide-react";
import { useState } from "react";
import BookCard from "../BookCard/BookCard";
import BookTable from "../BookTable/BookTable";
import { useGetBooksQuery } from "@/redux/features/books/bookApi";
import BookTableSkeleton from "../BookTable/BookTableSkeleton";
import BookCardSkeleton from "./BookCardSkeleton";

const BooksSection = () => {
    const [view, setView] = useState<"grid" | "table">("grid")
    const { data, isLoading } = useGetBooksQuery();

    return(
        <>
            <section className="w-full py-20">
                <div className="container mx-auto px-4">
                    <div className="flex items-center justify-between mb-6">
                        <h2 className="text-xl font-semibold">Books</h2>

                        <div className="flex gap-2">
                            <Button
                                variant={view === "grid" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setView("grid")}
                            >
                                <Grid className="h-4 w-4" />
                                Grid
                            </Button>

                            <Button
                                variant={view === "table" ? "default" : "outline"}
                                size="sm"
                                onClick={() => setView("table")}
                            >
                                <TableIcon className="h-4 w-4" />
                                Table
                            </Button>
                        </div>
                    </div>

                    {view === "grid" && (
                        <>
                            {
                                isLoading ? (
                                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                        {Array.from({ length: 6 }).map((_, i) => (
                                            <BookCardSkeleton key={i} />
                                        ))}
                                    </div>
                                ) : (
                                    <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                                        {data?.data?.map((book) => (
                                            <BookCard key={book._id} book={book} />
                                        ))}
                                    </div>
                                )
                            }
                        </>
                    )}

                    {view === "table" && (
                        <>
                            {
                                isLoading ? (
                                    <BookTableSkeleton />
                                ) : (
                                    <BookTable />
                                )
                            }
                        </>
                    )}
                </div>
            </section>
        </>
    )
};

export default BooksSection;