import { type FC } from "react"
import Skeleton from "@/components/ui/Skeleton"
import { Card, CardContent, CardHeader } from "@/components/ui/card"

const BookCardSkeleton: FC = () => {
    return (
        <Card>
            <CardHeader>
                <Skeleton className="h-5 w-2/3 mb-2" />
                <Skeleton className="h-4 w-1/2" />
            </CardHeader>
            
            <CardContent className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-2/3" />
                <div className="flex gap-2 mt-3">
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-16" />
                    <Skeleton className="h-8 w-20" />
                </div>
            </CardContent>
        </Card>
    )
}

export default BookCardSkeleton
