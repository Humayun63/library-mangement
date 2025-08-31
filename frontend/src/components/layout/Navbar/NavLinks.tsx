
import { type FC } from "react"
import { Link, useLocation } from "react-router";
import { menuItems } from "./constant";


const NavLinks: FC = () => {
    const location = useLocation();

    return (
        <>
            {menuItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                    <Link
                        key={item.name}
                        to={item.href}
                        className={`text-sm font-medium ${isActive ? 'underline' : ''}`}
                    >
                        {item.name}
                    </Link>
                );
            })}
        </>
    )
};

export default NavLinks;
