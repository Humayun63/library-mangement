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
                            <div className="overflow-x-auto rounded-md border max-w-full md:max-w-[800px] mx-auto">
                                <Table>
                                    <TableHeader>
                                        <TableRow>
                                            <TableHead>Title</TableHead>
                                            <TableHead>Author</TableHead>
                                            <TableHead>ISBN</TableHead>
                                            <TableHead className="text-right">Total Quantity</TableHead>
                                        </TableRow>
                                    </TableHeader>

                                    <TableBody>
                                        {data?.data.map((summary, index) => (
                                            <TableRow key={index}>
                                                <TableCell>{summary.book.title}</TableCell>
                                                <TableCell>{summary.book.author}</TableCell>
                                                <TableCell>{summary.book.isbn}</TableCell>
                                                <TableCell className="text-right">{summary.totalQuantity}</TableCell>
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