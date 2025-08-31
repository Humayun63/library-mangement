import { type FC } from "react"
import { Link } from "react-router"

const Logo: FC = () => {
    return (
        <Link to="/" className="flex items-center gap-2">
            <div className="w-10 h-10">
                <img src="/logo.png" alt="Logo" className="w-full h-auto mt-[-5px]" />
            </div>
            <span className="font-semibold text-lg hidden sm:block">Library</span>
        </Link>
    )
};

export default Logo;
