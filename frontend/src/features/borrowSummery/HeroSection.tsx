import { type FC } from "react";

const HeroSection: FC = () => {
    return (
        <>
            <section className="pt-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Borrow Summary
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            A summary of all borrowed books including borrower details,
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;