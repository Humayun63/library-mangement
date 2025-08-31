import { type FC } from "react";
import AddBookForm from "./AddBookForm/AddBookForm";

const AddBook: FC = () => {
    return (
        <>
            <section className="pt-14 pb-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold text-center mb-8">Add New Book</h1>
                    <div className="max-w-3xl mx-auto p-6 bg-card rounded-lg shadow-lg ">
                        <AddBookForm />
                    </div>
                </div>
            </section>
        </>
    );
};

export default AddBook;