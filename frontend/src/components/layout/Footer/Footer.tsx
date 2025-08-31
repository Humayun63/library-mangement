import { type FC } from "react"
import QuickInfo from "./QuickInfo";
import QuickLinks from "./QuickLinks";
import SocialLinks from "./SocialLinks";


const Footer: FC = () => {
    return (
        <footer className="w-full border-t mt-auto">
            <div className="container mx-auto grid grid-cols-1 grid-cols-2 sm:grid-cols-3 gap-8 py-8 px-4">
                <QuickInfo />
                <QuickLinks />
                <SocialLinks />
            </div>

            <div className="border-t py-4 text-center text-sm text-gray-600 dark:text-gray-400 px-2">
                © {new Date().getFullYear()} Library Management System. All rights reserved.
            </div>
        </footer>
    );
}

export default Footer
