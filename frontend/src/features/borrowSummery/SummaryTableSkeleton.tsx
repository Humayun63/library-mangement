import { type FC } from "react"
import {
    Table,
    TableBody,
    TableCell,
    TableHead,
    TableHeader,
    TableRow,
} from "@/components/ui/table"
import Skeleton from "@/components/ui/Skeleton"


const SummaryTableSkeleton: FC = () => {
    return (
        <div className="overflow-x-auto rounded-md border mx-auto bg-card">
            <Table>
                <TableHeader className="bg-card px-4 py-4">
                    <TableRow className="bg-card px-4 py-4">
                        <TableHead className="bg-card px-4 py-4">Title</TableHead>
                        <TableHead className="bg-card px-4 py-4">Author</TableHead>
                        <TableHead className="bg-card px-4 py-4">ISBN</TableHead>
                        <TableHead className="bg-card px-4 py-4 text-right">Total Quantity</TableHead>
                    </TableRow>
                </TableHeader>

                <TableBody>
                    {[...Array(5)].map((_, i) => (
                        <TableRow key={i}>
                            <TableCell className="bg-card px-4 py-4">
                                <Skeleton className="h-4 w-[150px]" />
                            </TableCell>
                            <TableCell className="bg-card px-4 py-4">
                                <Skeleton className="h-4 w-[120px]" />
                            </TableCell>
                            <TableCell className="bg-card px-4 py-4">
                                <Skeleton className="h-4 w-[100px]" />
                            </TableCell>
                            <TableCell className="bg-card px-4 py-4 text-right">
                                <Skeleton className="h-4 w-[50px] ml-auto" />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}

export default SummaryTableSkeleton;
