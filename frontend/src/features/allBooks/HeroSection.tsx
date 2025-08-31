import Logo from "@/components/layout/Navbar/Logo";
import { type FC } from "react";

const HeroSection: FC = () => {
    return (
        <>
            <section className="pt-20">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col items-center gap-4">
                        <Logo iconOnly={true} />
                        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
                            Explore Our Library
                        </h1>
                        <p className="max-w-[auto] md:max-w-2xl text-muted-foreground text-base md:text-xl text-center">
                            Browse through a wide collection of books, manage your favorites,
                            and borrow them with ease.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;