import { type FC } from "react"
import { Menu } from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { menuItems } from "./constant"
import { Link } from "react-router"

const MobileMenu: FC = () => {
    return (
        <div className="md:hidden">
            <DropdownMenu>
                <DropdownMenuTrigger>
                    <Menu />
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    {
                        menuItems.map((item) => (
                            <DropdownMenuItem key={item.name} asChild>
                                <Link to={item.href}>{item.name}</Link>
                            </DropdownMenuItem>
                        ))
                    }
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    )
}

export default MobileMenu;
