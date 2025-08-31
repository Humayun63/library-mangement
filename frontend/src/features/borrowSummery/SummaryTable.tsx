import { type FC } from "react";
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import { useGetBorrowSummaryQuery } from "@/redux/features/borrows/borrowApi";
import SummaryTableSkeleton from "./SummaryTableSkeleton";

const SummaryTable: FC = () => {
    const { data, isLoading } = useGetBorrowSummaryQuery();

    return (
        <>
            <section className="w-full pb-20">
                <div className="container mx-auto px-4">
                    {
                        isLoading ? (
                            <SummaryTableSkeleton />
                        ) : (
                            <div className="overflow-x-auto rounded-md border mx-auto bg-card">
                                <Table className="bg-card px-4 py-4">
                                    <TableHeader className="bg-card px-4 py-4">
                                        <TableRow className="bg-card px-4 py-4">
                                            <TableHead className="bg-card px-4 py-4">Title</TableHead>
                                            <TableHead className="bg-card px-4 py-4">Author</TableHead>
                                            <TableHead className="bg-card px-4 py-4">ISBN</TableHead>
                                            <TableHead className="bg-card px-4 py-4 text-right">Total Quantity</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {data?.data.map((summary, index) => (
                                            <TableRow key={index}>
                                                <TableCell className="bg-card px-4 py-4">{summary.book.title}</TableCell>
                                                <TableCell className="bg-card px-4 py-4">{summary.book.author}</TableCell>
                                                <TableCell className="bg-card px-4 py-4">{summary.book.isbn}</TableCell>
                                                <TableCell className="bg-card px-4 py-4 text-right">{summary.totalQuantity}</TableCell>
                                            </TableRow>
                                        ))}
                                    </TableBody>
                                </Table>
                            </div>
                        )
                    }
                </div>
            </section>
        </>
    );
};

export default SummaryTable;