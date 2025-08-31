import { type FC } from "react"
import { Laptop, Moon, Sun } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { themeOptions } from "./constant";
import { useTheme, type Theme } from "@/providers/theme-provider";

const ThemeToggle: FC = () => {
    const { setTheme, theme } = useTheme()
            
    const handleThemeChange = (theme: Theme) => {
        setTheme(theme)
    }

    return (
        <div>
            <DropdownMenu>
                <DropdownMenuTrigger>
                    {theme === "light" && <Sun className="h-5 w-5" />}
                    {theme === "dark" && <Moon className="h-5 w-5" />}
                    {theme === "system" && <Laptop className="h-5 w-5" />}
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
