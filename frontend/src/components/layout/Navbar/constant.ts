import { Moon, Sun, Laptop } from "lucide-react"
export const menuItems = [
    { name: "Home", href: "/" },
    { name: "All Books", href: "/books" },
    { name: "Add Book", href: "/create-book" },
    { name: "Book Summary", href: "/borrow-summary" },
]

export const themeOptions = [
    {label: 'Light', value: 'light', icon: Moon},
    {label: 'Dark', value: 'dark', icon: Sun},
    {label: 'System', value: 'system', icon: Laptop}
]