import { cn } from "@/lib/utils"
import { type FC } from "react"

interface SkeletonProps {
    className?: string
}

const Skeleton: FC<SkeletonProps> = ({ className }) => {
    return (
        <div
            className={cn(
                "animate-pulse rounded-md bg-gray-200 dark:bg-gray-700",
                className
            )}
        />
    )
}

export default Skeleton
