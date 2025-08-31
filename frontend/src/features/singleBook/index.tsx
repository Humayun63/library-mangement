import { type FC } from "react";
import { Calendar, User, Hash, Layers } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Separator } from "@/components/ui/separator"
import { useGetBookQuery } from "@/redux/features/books/bookApi";
import { useParams } from "react-router";
import BookDetailsSkeleton from "./BookDetailsSkeleton";
import Logo from "@/components/layout/Navbar/Logo";

const SingleBook: FC = () => {
    const {id} = useParams();
    const { data, isLoading } = useGetBookQuery(id as string);

    if(isLoading){
        return <BookDetailsSkeleton />
    }

    return (
        <>
            <section className="container mx-auto px-4 py-10">
                <Card className="max-w-3xl mx-auto shadow-md">
                    <CardHeader>
                        <CardTitle className="flex items-center gap-2 text-2xl font-bold">
                            <Logo iconOnly /> {data?.data?.title}
                        </CardTitle>
                        <p className="text-muted-foreground text-sm">
                            <User className="inline-block h-4 w-4 mr-1" />
                            {data?.data?.author}
                        </p>
                    </CardHeader>

                    <CardContent className="space-y-6">
                        <div className="flex flex-wrap items-center gap-4">
                            <Badge variant="secondary" className="flex items-center gap-1">
                                <Layers className="h-4 w-4" />
                                {data?.data?.genre}
                            </Badge>

                            <span className="flex items-center gap-1 text-sm text-muted-foreground">
                                <Hash className="h-4 w-4" />
                                ISBN: {data?.data?.isbn}
                            </span>
                        </div>

                        <Separator />

                        <div>
                            <h3 className="font-semibold mb-1">Description</h3>
                            <p className="text-sm text-muted-foreground">
                                {data?.data.description || "No description available."}
                            </p>
                        </div>

                        <Separator />

                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm">
                                    Availability:{" "}
                                    {data?.data.available ? (
                                        <Badge className="bg-green-500 text-white">Available</Badge>
                                    ) : (
                                        <Badge variant="destructive">Unavailable</Badge>
                                    )}
                                </p>
                                <p className="text-sm text-muted-foreground">
                                    Copies: {data?.data.copies}
                                </p>
                            </div>
                        </div>

                        <Separator />

                        <div className="text-xs text-muted-foreground space-y-2">
                            <p className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Created At: {data?.data?.createdAt ? new Date(data.data.createdAt).toLocaleDateString() : 'N/A'}
                            </p>

                            <p className="flex items-center gap-1">
                                <Calendar className="h-4 w-4" />
                                Updated At: {data?.data?.updatedAt ? new Date(data.data.updatedAt).toLocaleDateString() : 'N/A'}
                            </p>
                        </div>
                    </CardContent>
                </Card>
            </section>
        </>
    );
};

export default SingleBook;