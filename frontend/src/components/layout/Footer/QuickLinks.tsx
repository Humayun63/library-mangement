import { type FC } from "react";
import { menuItems } from "../Navbar/constant";
import { Link } from "react-router";

const QuickLinks: FC = () => {
    return (
        <>
            <div>
                <h3 className="text-base font-semibold mb-3">Quick Menu</h3>
                <ul className="flex flex-col gap-2 text-sm">
                    {
                        menuItems.map(item => (
                            <li key={item.href}>
                                <Link to={item.href} className="hover:underline">{item.name}</Link>
                            </li>
                        ))
                    }
                </ul>
            </div>
        </>
    );
};

export default QuickLinks;