
import { type FC } from "react"
import { Menu } from "lucide-react"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { menuItems } from "./constant"
import { Link, useLocation } from "react-router"


const MobileMenu: FC = () => {
    const location = useLocation();
    
    return (
        <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Menu />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    {
                        menuItems.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <DropdownMenuItem key={item.name} asChild>
                                    <Link to={item.href} className={isActive ? 'text-primary underline' : ''}>{item.name}</Link>
                                </DropdownMenuItem>
                            );
                        })
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MobileMenu;
