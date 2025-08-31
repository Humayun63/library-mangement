import { format } from "date-fns"
import { Calendar as CalendarIcon } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Calendar } from "@/components/ui/calendar"
import {
	Popover,
	PopoverContent,
	PopoverTrigger,
} from "@/components/ui/popover"
import { useState, type FC } from "react"

interface DatePickerProps {
	disablePastDates?: boolean
	value?: Date
	onChange?: (date: Date | undefined) => void
	className?: string
}

export const DatePicker: FC<DatePickerProps> = (props) => {
	const {
		disablePastDates,
		value,
		onChange,
		className,
	} = props

	const [internalDate, setInternalDate] = useState<Date | undefined>(value)
	const date = value !== undefined ? value : internalDate

	const handleSelect = (selected: Date | undefined) => {
		setInternalDate(selected)
		onChange?.(selected)
	}

	const today = new Date()
	today.setHours(0, 0, 0, 0)

	return (
		<Popover>
			<PopoverTrigger asChild>
				<Button
					variant="outline"
					data-empty={!date}
					className={cn(
						"data-[empty=true]:text-muted-foreground w-[280px] justify-start text-left font-normal",
						className
					)}
				>
					<CalendarIcon className="mr-2 h-4 w-4" />
					{date ? format(date, "PPP") : <span>Pick a date</span>}
				</Button>
			</PopoverTrigger>
			
			<PopoverContent className="w-auto p-0">
				<Calendar
					mode="single"
					selected={date}
					onSelect={handleSelect}
					disabled={
						disablePastDates
						? (currentDate) => {
							const today = new Date()
							today.setHours(0, 0, 0, 0)
							return currentDate < today
							}
						: undefined
					}
				/>
			</PopoverContent>
		</Popover>
	)
}
