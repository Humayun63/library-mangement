import type { IAddBookResponse, IBook, IGetBookResponse } from "@/interfaces/book.interface";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const bookApi = createApi({
    reducerPath: "bookApi",
    baseQuery: fetchBaseQuery({ baseUrl: "https://library-management-gules-delta.vercel.app/api" }),
    // baseQuery: fetchBaseQuery({ baseUrl: "http://localhost:5000/api" }),
    tagTypes: ["Books"],
    endpoints: (builder) => ({
        getBooks: builder.query<IGetBookResponse, void>({
            query: () => "/books?sortBy=createdAt&sort=desc&limit",
            providesTags: ["Books"],
        }),
        getBook: builder.query<IBook, string>({
            query: (id) => `/books/${id}`,
        }),
        addBook: builder.mutation<IAddBookResponse, Partial<IBook>>({
            query: (body) => ({
                url: "/books",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Books"],
        }),
        updateBook: builder.mutation<IBook, { id: string; data: Partial<IBook> }>({
            query: ({ id, data }) => ({
                url: `/books/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: ["Books"],
        }),
        deleteBook: builder.mutation<{ success: boolean; id: string }, string>({
            query: (id) => ({
                url: `/books/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Books"],
        }),
    }),
});

export const {
    useGetBooksQuery,
    useGetBookQuery,
    useAddBookMutation,
    useUpdateBookMutation,
    useDeleteBookMutation,
} = bookApi;