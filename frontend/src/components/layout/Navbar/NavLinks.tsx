import { type FC } from "react"
import { Link } from "react-router";
import { menuItems } from "./constant";

const NavLinks: FC = () => {
    return (
        <>
            {menuItems.map((item) => (
                <Link
                    key={item.name}
                    to={item.href}
                    className="text-sm font-medium transition-colors hover:text-primary"
                >
                    {item.name}
                </Link>
            ))}
        </>
    )
};

export default NavLinks;
