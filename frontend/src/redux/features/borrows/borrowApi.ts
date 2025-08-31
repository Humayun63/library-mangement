import type { IBorrowBook, IBorrowBookResponse, IBorrowSummary } from "@/interfaces/borrow.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
    reducerPath: "borrowApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-gules-delta.vercel.app/api" }),
    tagTypes: ["Borrows"],
    endpoints: (builder) => ({
        borrowBook: builder.mutation<IBorrowBookResponse, Partial<IBorrowBook>>({
            query: (body) => ({
                url: "/borrow",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Borrows"],
        }),
        getBorrowSummary: builder.query<IBorrowSummary[], void>({
            query: () => "/borrow",
            providesTags: ["Borrows"],
        }),
    }),
});

export const {
    useBorrowBookMutation,
    useGetBorrowSummaryQuery,
} = borrowApi;