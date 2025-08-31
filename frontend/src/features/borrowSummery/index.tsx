import { type FC } from "react";
import HeroSection from "./HeroSection";
import SummaryTable from "./SummaryTable";

const BorrowSummary: FC = () => {
    return (
        <>
            <HeroSection />
            <SummaryTable />
        </>
    );
};

export default BorrowSummary;