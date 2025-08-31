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
import { useTheme, type Theme } from "@/providers/theme-provider";

const ThemeToggle: FC = () => {
    const { setTheme } = useTheme()
    
    const handleThemeChange = (theme: Theme) => {
        setTheme(theme)
    }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Sun className="h-5 w-5" />
                </DropdownMenuTrigger>
                
                <DropdownMenuContent align="end">
                    {
                        themeOptions.map((option) => (
                            <DropdownMenuItem key={option.value} onClick={() => handleThemeChange(option.value as Theme)}>
                                <option.icon /> {option.label}
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
};

export default ThemeToggle;
