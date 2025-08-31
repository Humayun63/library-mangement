import App from "@/App";
import AddBookPage from "@/pages/AddBookPage";
import AllBooksPage from "@/pages/AllBooksPage";
import BorrowSummaryPage from "@/pages/BorrowSummaryPage";
import LandingPage from "@/pages/LandingPage";
import SingleBookPage from "@/pages/SingleBookPage";
import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
    {
        path: "/",
        Component: App,
        children: [
            {
                path: "/",
                index: true,
                Component: LandingPage,
            },
            {
                path: "books",
                Component: AllBooksPage,
            },
            {
                path: "create-book",
                Component: AddBookPage,
            },
            {
                path: "books/:id",
                Component: SingleBookPage,
            },
            {
                path: "borrow-summary",
                Component: BorrowSummaryPage,
            },
        ],
    },
]);

export default router;