import ThemeToggle from "./ThemeToggle"
import MobileMenu from "./MobileMenu"
import Logo from "./Logo";
import NavLinks from "./NavLinks";

const Navbar = () => {
    return (
        <header className="w-full bg-background relative">
            <nav className="container mx-auto flex items-center justify-between px-4 py-3">
                <Logo />

                <div className="hidden md:flex gap-6 items-center">
                    <NavLinks />
                </div>

                <div className="flex items-center gap-2">
                    <MobileMenu />
                    <ThemeToggle />
                </div>
            </nav>
        </header>
    )
};

export default Navbar;
