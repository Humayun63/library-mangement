import type { IBorrowBook, IBorrowBookResponse, IBorrowBookSummaryResponse } from "@/interfaces/borrow.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const borrowApi = createApi({
    reducerPath: "borrowApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-gules-delta.vercel.app/api" }),
    tagTypes: ["Borrows", "Books"],
    endpoints: (builder) => ({
        borrowBook: builder.mutation<IBorrowBookResponse, Partial<IBorrowBook>>({
            query: (body) => ({
                url: "/borrow",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Borrows", "Books"],
        }),
        getBorrowSummary: builder.query<IBorrowBookSummaryResponse, void>({
            query: () => "/borrow",
            providesTags: ["Borrows"],
        }),
    }),
});

export const {
    useBorrowBookMutation,
    useGetBorrowSummaryQuery,
} = borrowApi;