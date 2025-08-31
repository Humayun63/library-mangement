import { type FC } from "react"
import { Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { themeOptions } from "./constant";

const ThemeToggle: FC = () => {
    const handleThemeChange = (theme: string) => {
        console.log(`Theme changed to: ${theme}`)
    }

    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon">
                    <Sun className="h-5 w-5" />
                </Button>
            </DropdownMenuTrigger>
            
            <DropdownMenuContent align="end">
                {
                    themeOptions.map((option) => (
                        <DropdownMenuItem key={option.value} onClick={() => handleThemeChange(option.value)}>
                            <option.icon /> {option.label}
                        </DropdownMenuItem>
                    ))
                }
            </DropdownMenuContent>
        </DropdownMenu>
    )
};

export default ThemeToggle;
