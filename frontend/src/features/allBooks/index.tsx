import { type FC } from "react";
import BooksSection from "@/components/common/BooksSection/BooksSection";
import HeroSection from "./HeroSection";

const AllBooks: FC = () => {
    return (
        <>
            <HeroSection />
            <BooksSection />
        </>
    );
};

export default AllBooks;