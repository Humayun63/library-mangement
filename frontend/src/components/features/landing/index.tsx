import { type FC } from "react";
import HeroSection from "./HeroSection";
import BooksSection from "@/components/common/BooksSection/BooksSection";

const Landing: FC = () => {
    return (
        <>
            <HeroSection />
            <BooksSection />
        </>
    );
};

export default Landing;