import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { type FC } from "react";
import { Link } from "react-router";

const HeroSection: FC = () => {
    return (
        <>
            <section className="py-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-4xl mx-auto text-center">
                        <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                            Library Management
                        </h1>
                        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                            A modern, efficient solution for managing your library's book collection, 
                            borrowing records, and inventory tracking.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Link to="/create-book">
                                <Button size="lg" variant="default" className="w-full sm:w-auto cursor-pointer hover:scale-105">
                                    <Plus className="mr-2 h-5 w-5" />
                                    Add New Book
                                </Button>
                            </Link>
                            <Link to="/borrow-summary">
                                <Button variant="outline" size="lg" className="w-full sm:w-auto cursor-pointer hover:scale-105">
                                    View Borrow Summary
                                </Button>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default HeroSection;