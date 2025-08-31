import { type FC } from "react";
import Logo from "../Navbar/Logo";

const QuickInfo: FC = () => {
    return (
        <>
            <div className="flex flex-col gap-2 col-span-2 sm:col-span-1">
                <Logo />

                <p className="text-sm text-gray-600 dark:text-gray-400 max-w-[auto] sm:max-w-[200px]">
                    Manage your books, borrow easily, and explore knowledge at one place.
                </p>
            </div>
        </>
    );
};

export default QuickInfo;