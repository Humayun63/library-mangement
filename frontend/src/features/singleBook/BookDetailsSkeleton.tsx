import { type FC } from "react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Skeleton from "@/components/ui/Skeleton"

const BookDetailsSkeleton: FC = () => {
    return (
        <section className="container mx-auto px-4 py-10">
            <Card className="max-w-3xl mx-auto shadow-md">
                <CardHeader>
                    <Skeleton className="h-6 w-48 mb-2" />
                    <Skeleton className="h-4 w-32" />
                </CardHeader>
                <CardContent className="space-y-6">
                    <div className="flex flex-wrap items-center gap-4">
                        <Skeleton className="h-6 w-20" />
                        <Skeleton className="h-4 w-32" />
                    </div>

                    <div>
                        <Skeleton className="h-4 w-32 mb-2" />
                        <Skeleton className="h-16 w-full" />
                    </div>

                    <div className="flex items-center justify-between">
                        <div className="space-y-2">
                            <Skeleton className="h-4 w-24" />
                            <Skeleton className="h-4 w-20" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <Skeleton className="h-3 w-40" />
                        <Skeleton className="h-3 w-40" />
                    </div>
                </CardContent>
            </Card>
        </section>
    )
}

export default BookDetailsSkeleton
